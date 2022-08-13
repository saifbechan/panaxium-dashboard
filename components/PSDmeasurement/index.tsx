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

const PSDMeasurement = () => {
  return (
    <Section title="PSD measurement" info="Some extra information">
      <Chart
        type="bar"
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            y: {
              display: false,
            },
            x: {
              display: false,
            },
          },
        }}
        data={{
          labels,
          datasets: [
            {
              type: 'line',
              label: 'Dataset 1',
              borderColor: '#61586F',
              borderWidth: 2,
              fill: false,
              data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
              pointRadius: 0,
              cubicInterpolationMode: 'monotone',
            },
            {
              type: 'line',
              fill: true,
              label: 'Dataset 2',
              backgroundColor: '#583170',
              data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
              borderColor: '#683276',
              borderWidth: 2,
              pointRadius: 0,
              cubicInterpolationMode: 'monotone',
            },
          ],
        }}
      />
    </Section>
  );
};

export default PSDMeasurement;
