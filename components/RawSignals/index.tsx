import 'chartjs-adapter-luxon';
import {
  CategoryScale,
  ChartDataset,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
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

const RawSignals = ({ data, signal }: { data: ChartDataset<'line', []>; signal: number }) => {
  const setSelectedSignal = useSetRecoilState(selectedSignalState);

  return (
    <Section title="Raw Signals" info="Some extra information">
      <Line
        data={{
          datasets: [data],
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
                    dataset.data.push({
                      x: Date.now(),
                      y: faker.datatype.float({ min: index, max: index + 1 }),
                    });
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
