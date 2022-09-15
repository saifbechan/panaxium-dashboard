import { Bar } from 'react-chartjs-2';
import { Collapse, Select, Spacer } from '@chakra-ui/react';

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
            <Select placeholder="Select channel" size="xs">
              {[...new Array(128)].map((_item, index) => (
                <option key={index} value="option3">
                  Channel {index + 1}
                </option>
              ))}
            </Select>

            <Spacer h={10} />

            <Bar
              data={{
                labels,
                datasets: [
                  {
                    data: labels.map(() => faker.datatype.float({ min: 0, max: 1 })),
                    backgroundColor: ['#61586F', '#59486A', '#4F3A64', '#472B5E', '#401D56'],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
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
