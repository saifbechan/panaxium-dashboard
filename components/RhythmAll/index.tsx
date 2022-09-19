import 'chartjs-adapter-luxon';
import { BubbleDataPoint, ChartDataset, Chart as ChartJS, ScatterDataPoint } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Collapse } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { sectionTogglesState, signalsMinMaxState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import { useMemo, useRef } from 'react';
import Section from '../Section';

const RhythmAll = ({
  datasets,
  lfpSegment,
}: {
  datasets: ChartDataset<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[]>[];
  lfpSegment: number[][];
}) => {
  const sectionToggles = useAtomValue(sectionTogglesState);
  const chartRef = useRef<ChartJS>(null);
  const { min, max } = useAtomValue(signalsMinMaxState);
  const pointer = useRef(0);

  return (
    <Collapse animateOpacity in={sectionToggles['rhythm_all']} style={{ gridColumn: 'span 2' }}>
      <Section border="1px solid #401D56" info="Some extra information" title="Rhythm (all)">
        {useMemo(
          () => (
            <Chart
              ref={chartRef}
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
                      delay: 2000,
                      refresh: 20,
                      onRefresh: (chart: ChartJS) => {
                        chart.data.datasets.forEach((dataset, index) => {
                          const y = lfpSegment[index]
                            ? lfpSegment[index][pointer.current]
                            : faker.datatype.float({ min, max });

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
                    min,
                    max,
                  },
                },
              }}
              type="line"
            />
          ),
          // eslint-disable-next-line react-hooks/exhaustive-deps
          []
        )}
      </Section>
    </Collapse>
  );
};

export default RhythmAll;
