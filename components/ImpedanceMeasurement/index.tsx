import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, Legend, LinearScale, PointElement, Tooltip } from 'chart.js';
import { faker } from '@faker-js/faker';
import Section from '../Section';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const ImpedanceMeasurement = () => {
  return (
    <Section title="Impedance measurement" info="Some extra information">
      <Bubble
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              display: false,
            },
            x: {
              display: false,
            },
          },
          plugins: {
            legend: { display: false },
          },
        }}
        data={{
          datasets: [
            {
              label: 'Red dataset',
              data: Array.from({ length: 16 }, () => ({
                x: faker.datatype.number({ min: 0, max: 10 }),
                y: faker.datatype.number({ min: 0, max: 10 }),
                r: faker.datatype.number({ min: 5, max: 20 }),
              })),
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            },
          ],
        }}
      />
    </Section>
  );
};

export default ImpedanceMeasurement;
