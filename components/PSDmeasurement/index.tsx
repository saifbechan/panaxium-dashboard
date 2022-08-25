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
import { useMemo, useRef } from 'react';
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
  const chartRef = useRef<ChartJS>(null);

  return useMemo(
    () => (
      <Section title="PSD measurement" info="Some extra information">
        <Chart
          ref={chartRef}
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
                borderColor: '#61586F',
                borderWidth: 2,
                fill: false,
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                pointRadius: 0,
                cubicInterpolationMode: 'monotone',
              },
              {
                type: 'line',
                borderColor: '#48438C',
                borderWidth: 2,
                fill: false,
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                pointRadius: 0,
                cubicInterpolationMode: 'monotone',
              },
              {
                type: 'line',
                fill: true,
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
    ),
    []
  );
};

export default PSDMeasurement;
