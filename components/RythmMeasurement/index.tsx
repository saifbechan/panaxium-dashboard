import { Box } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Rythm Measurement',
    },
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

const RythmMeasurement = () => {
  return (
    <Box backgroundColor="#29293B">
      <Bar options={options} data={data} />
    </Box>
  );
};

export default RythmMeasurement;
