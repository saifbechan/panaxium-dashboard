import 'chartjs-adapter-luxon';
import {
  BubbleDataPoint,
  CategoryScale,
  ChartDataset,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  ScatterDataPoint,
  Title,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { selectedSignalState } from '../../lib/store';
import { useAtom } from 'jotai';
import { useMemo, useRef } from 'react';
import Section from '../Section';
import StreamingPlugin from 'chartjs-plugin-streaming';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(
  StreamingPlugin,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const RawSignals = ({
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
      info="Some extra information"
      title="Raw Signals"
    >
      {useMemo(
        () => (
          <Chart
            ref={chartRef}
            data={{
              datasets,
            }}
            options={{
              events: ['click'],
              onClick: () => {
                setSelectedSignal(signal);
              },
              plugins: {
                legend: { display: false },
                zoom: {
                  pan: {
                    enabled: true,
                    mode: 'x',
                  },
                  zoom: {
                    pinch: {
                      enabled: true,
                    },
                    wheel: {
                      enabled: true,
                    },
                    mode: 'x',
                  },
                },
              },
              scales: {
                x: {
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

export default RawSignals;
