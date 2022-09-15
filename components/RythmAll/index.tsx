import 'chartjs-adapter-luxon';
import { BubbleDataPoint, ChartDataset, Chart as ChartJS, ScatterDataPoint } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Collapse } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { sectionTogglesState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import { useMemo, useRef } from 'react';
import Section from '../Section';

const RythmAll = ({
  datasets,
}: {
  datasets: ChartDataset<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[]>[];
}) => {
  const sectionToggles = useAtomValue(sectionTogglesState);
  const chartRef = useRef<ChartJS>(null);

  return (
    <Collapse animateOpacity in={sectionToggles['rythm_all']} style={{ gridColumn: 'span 2' }}>
      <Section border="1px solid #401D56" info="Some extra information" title="Rythm (all)">
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
                      onRefresh: (chart: ChartJS) => {
                        chart.data.datasets.forEach((dataset) => {
                          const next = {
                            x: Date.now(),
                            y: faker.datatype.float({ min: 0, max: 1 }),
                          };
                          dataset.data.push(next);
                        });
                      },
                    },
                  },
                  y: {
                    display: false,
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

export default RythmAll;
