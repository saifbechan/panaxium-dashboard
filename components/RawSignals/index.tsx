import 'chartjs-adapter-luxon';
import {
  BubbleDataPoint,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  ScatterDataPoint,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import Section from '../Section';
import StreamingPlugin from 'chartjs-plugin-streaming';
import selectedSignalState from '../../store/selected-signal-state';
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
  sets,
  signal,
}: {
  sets: (number | ScatterDataPoint | BubbleDataPoint | null)[][];
  signal: number;
}) => {
  const datasets = useRef<(number | ScatterDataPoint | BubbleDataPoint | null)[][]>(sets);
  const setSelectedSignal = useSetRecoilState(selectedSignalState);

  return (
    <Section title="Raw Signals" info="Some extra information">
      <Line
        data={{
          datasets: [
            {
              label: 'Dataset 1',
              backgroundColor: '#61586F',
              borderColor: '#61586F',
              cubicInterpolationMode: 'monotone',
              data: datasets.current[0],
              pointRadius: 0,
            },
            {
              label: 'Dataset 2',
              backgroundColor: '#472B5E',
              borderColor: '#59486A',
              cubicInterpolationMode: 'monotone',
              data: datasets.current[1],
              pointRadius: 0,
            },
          ],
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
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset, index) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: faker.datatype.float({ min: index, max: index + 1 }),
                    });

                    datasets.current[index] = dataset.data;
                  });
                },
              },
            },
          },
        }}
      />
    </Section>
  );
};

export default RawSignals;
