import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import Section from '../Section';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  Filler
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
    {
      type: 'line' as const,
      fill: true,
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'white',
      borderWidth: 2,
    },
  ],
};

const PSDMeasurement = () => {
  return (
    <Section title="PSD measurement" info="Some extra information">
      <Chart
        type="bar"
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              display: false,
            },
            x: {
              display: false,
            },
          },
        }}
        data={data}
      />
    </Section>
  );
};

export default PSDMeasurement;
