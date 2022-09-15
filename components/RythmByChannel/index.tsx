import { Bar } from 'react-chartjs-2';
import { Collapse } from '@chakra-ui/react';

import { faker } from '@faker-js/faker';
import { sectionTogglesState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import Section from '../Section';

const RythmByChannel = () => {
  const sectionToggles = useAtomValue(sectionTogglesState);

  const labels = ['delta', 'theta', 'alpha', 'beta', 'gamma'];

  return (
    <Collapse animateOpacity in={sectionToggles['rythm_channel']}>
      {useMemo(
        () => (
          <Section
            border="1px solid #401D56"
            info="Some extra information"
            title="Rythm by channel"
          >
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

export default RythmByChannel;
