import 'chartjs-adapter-luxon';
import { BubbleDataPoint, ChartDataset, Chart as ChartJS, ScatterDataPoint } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { selectedSignalState } from '../../lib/store';
import { useAtom } from 'jotai';
import { useMemo, useRef } from 'react';
import Section from '../Section';

const RawSignal = ({
  datasets,
  signal,
}: {
  datasets: ChartDataset<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[]>[];
  signal: number;
}) => {
  const chartRef = useRef<ChartJS>(null);
  const [selectedSignal, setSelectedSignal] = useAtom(selectedSignalState);

  return (
    <Section
      border={`1px solid ${signal === selectedSignal ? '#61586F' : '#401D56'}`}
      boxed={false}
      title={`#${signal}`}
    >
      {useMemo(
        () => (
          <Chart
            ref={chartRef}
            data={{
              datasets,
            }}
            options={{
              maintainAspectRatio: true,
              events: ['click'],
              onClick: () => {
                setSelectedSignal(signal);
              },
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
                      chart.data.datasets.forEach((dataset, index) => {
                        const next = {
                          x: Date.now(),
                          y: faker.datatype.float({ min: index, max: index + 1 }),
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
  );
};

export default RawSignal;
