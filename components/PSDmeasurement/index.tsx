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
import { Collapse } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { sectionTogglesState } from '../../lib/store';
import { useAtomValue } from 'jotai';
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
  const isOn = useAtomValue(sectionTogglesState)['psd-measurement'];
  const chartRef = useRef<ChartJS>(null);

  return (
    <Collapse animateOpacity in={isOn}>
      <Section info="Some extra information" title="PSD measurement">
        {useMemo(
          () => (
            <Chart
              ref={chartRef}
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
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  datalabels: { display: false },
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
              type="bar"
            />
          ),
          []
        )}
      </Section>
    </Collapse>
  );
};

export default PSDMeasurement;
