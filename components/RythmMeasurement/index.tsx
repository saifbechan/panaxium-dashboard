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
import { Box, Tooltip as CTooltip } from '@chakra-ui/react';
import { BsQuestionCircle } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';

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
    <Box backgroundColor="#29293B" padding="10px">
      <Box textAlign="right">
        <CTooltip label="Some extra information" hasArrow>
          <span>
            <Icon as={BsQuestionCircle} color="text.dimmed" />
          </span>
        </CTooltip>
      </Box>

      <Bar options={options} data={data} />
    </Box>
  );
};

export default RythmMeasurement;
