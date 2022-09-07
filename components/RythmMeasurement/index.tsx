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
import { displaySignalsState } from '../../lib/store';
import { faker } from '@faker-js/faker';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import Section from '../Section';
import StreamingPlugin from 'chartjs-plugin-streaming';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, StreamingPlugin);

const RythmMeasurement = () => {
  const isOn = !useAtomValue(displaySignalsState);

  const labels = ['delta', 'theta', 'alpha', 'beta', 'gamma'];

  return (
    <Collapse animateOpacity in={isOn}>
      {useMemo(
        () => (
          <Section info="Some extra information" title="Rythm Measurement">
            <Bar
              data={{
                labels,
                datasets: [
                  {
                    label: 'Channel 1',
                    data: labels.map(() => faker.datatype.float({ min: 0, max: 1 })),
                    backgroundColor: ['#61586F', '#59486A', '#4F3A64', '#472B5E', '#401D56'],
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top' as const,
                  },
                  datalabels: { display: false },
                },
              }}
            />
          </Section>
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
      )}
    </Collapse>
  );
};

export default RythmMeasurement;
