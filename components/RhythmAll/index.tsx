import 'chartjs-adapter-luxon';
import { BubbleDataPoint, ChartDataset, Chart as ChartJS, ScatterDataPoint } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Collapse } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { sectionTogglesState, signalsMinMaxState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import { useRef } from 'react';
import Section from '../Section';
import lfpSegment from '../../data/lfp-segment';

const RhythmAll = ({
  datasets,
}: {
  datasets: ChartDataset<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[]>[];
}) => {
  const sectionToggles = useAtomValue(sectionTogglesState);
  const minMaxAll = useAtomValue(signalsMinMaxState);
  const pointer = useRef(0);

  return (
    <Collapse animateOpacity in={sectionToggles['rhythm_all']} style={{ gridColumn: 'span 2' }}>
      <Section border="1px solid #401D56" info="Some extra information" title="Rhythm (all)">
        <Chart
          data={{
            datasets,
          }}
          options={{
            plugins: {
              legend: { display: false },
              datalabels: { display: false },
            },
            scales: {
              x: {
                display: false,
                type: 'realtime',
                realtime: {
                  duration: 30000,
                  delay: 2000,
                  refresh: 200,
                  onRefresh: (chart: ChartJS) => {
                    chart.data.datasets.forEach((dataset, index) => {
                      const y = lfpSegment[index]
                        ? lfpSegment[index][pointer.current]
                        : faker.datatype.float({
                            min: minMaxAll.all[index].min,
                            max: minMaxAll.all[index].max,
                          });

                      const next = {
                        x: Date.now(),
                        y,
                      };
                      dataset.data.push(next);
                    });

                    if (pointer.current === 500) {
                      pointer.current = 0;
                      return;
                    }

                    pointer.current += 1;
                  },
                },
              },
              y: {
                display: false,
                min: minMaxAll.sum.min,
                max: minMaxAll.sum.max,
              },
            },
          }}
          type="line"
        />
      </Section>
    </Collapse>
  );
};

export default RhythmAll;
