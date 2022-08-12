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

const RawSignals = () => {
  const datasets = useRef<(number | ScatterDataPoint | BubbleDataPoint | null)[][]>([[], []]);

  return (
    <Section title="Raw Signals" info="Some extra information">
      <Line
        data={{
          datasets: [
            {
              label: 'Dataset 1',
              backgroundColor: '#61586F',
              borderColor: '#59486A',
              cubicInterpolationMode: 'monotone',
              data: datasets.current[0],
            },
            {
              label: 'Dataset 2',
              backgroundColor: '#472B5E',
              borderColor: '#401D56',
              cubicInterpolationMode: 'monotone',
              data: datasets.current[1],
            },
          ],
        }}
        options={{
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
