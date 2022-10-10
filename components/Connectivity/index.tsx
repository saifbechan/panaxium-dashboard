import { Button, Collapse, Spacer, Stack } from '@chakra-ui/react';
import { sectionTogglesState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
import DeviceConfig from '../DeviceConfig';
import DeviceConfigReset from '../DeviceConfig/blank';
import Section from '../Section';
import dataConnectivity from '../../data/data-connectivity';

const Connectivity = () => {
  const [reset, setReset] = useState(false);
  const sectionToggles = useAtomValue(sectionTogglesState);

  return (
    <Collapse animateOpacity in={sectionToggles['connectivity']} style={{ gridColumn: 'span 4' }}>
      <Section border="1px solid #401D56" id="connectivity" title="Connectivity">
        <Stack align="center" direction="row" justifyContent="center" spacing={4}>
          <Button
            _hover={{ backgroundColor: '#48438C' }}
            backgroundColor="#401D56"
            border="1px solid gray"
            borderRadius={2}
            disabled={reset}
            fontWeight="normal"
            size="xs"
            onClick={() => setReset(true)}
          >
            Reset
          </Button>
          <Button
            _hover={{ backgroundColor: '#48438C' }}
            backgroundColor="#401D56"
            border="1px solid gray"
            borderRadius={2}
            disabled={!reset}
            fontWeight="normal"
            size="xs"
            onClick={() => setReset(false)}
          >
            Reference channel
          </Button>
        </Stack>

        <Spacer h={5} />

        {reset ? <DeviceConfigReset /> : <DeviceConfig dataset={dataConnectivity} highlight />}
      </Section>
    </Collapse>
  );
};

export default Connectivity;
