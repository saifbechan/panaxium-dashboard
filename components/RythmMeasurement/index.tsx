import { Bar } from 'react-chartjs-2';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Collapse } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import Section from '../Section';
import StreamingPlugin from 'chartjs-plugin-streaming';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, StreamingPlugin);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    datalabels: { display: false },
  },
};

const labels = ['delta', 'theta', 'alpha', 'beta', 'gamma'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Channel 1',
      data: labels.map(() => faker.datatype.float({ min: 0, max: 1 })),
      backgroundColor: ['#61586F', '#59486A', '#4F3A64', '#472B5E', '#401D56'],
    },
  ],
};

const RythmMeasurement = ({ on }: { on: boolean }) => {
  return (
    <Collapse animateOpacity in={on}>
      <Section info="Some extra information" title="Rythm Measurement">
        <Bar data={data} options={options} />
      </Section>
    </Collapse>
  );
};

export default RythmMeasurement;
