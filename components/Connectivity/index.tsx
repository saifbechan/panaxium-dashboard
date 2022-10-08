import { Button, Collapse, Spacer, Stack } from '@chakra-ui/react';
import { sectionTogglesState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import { useRef } from 'react';
import DeviceConfig from '../DeviceConfig';
import Section from '../Section';

const Connectivity = () => {
  const sectionToggles = useAtomValue(sectionTogglesState);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <Collapse animateOpacity in={sectionToggles['connectivity']}>
      <Section border="1px solid #401D56" info="Some extra information" title="Connectivity">
        <Stack align="center" direction="row" justifyContent="center" spacing={4}>
          <Button
            ref={buttonRef}
            backgroundColor="#401D56"
            border="1px solid gray"
            borderRadius={2}
            fontWeight="normal"
            size="xs"
          >
            Reset
          </Button>
          <Button
            backgroundColor="#401D56"
            border="1px solid gray"
            borderRadius={2}
            fontWeight="normal"
            size="xs"
          >
            Reference channel
          </Button>
        </Stack>

        <Spacer h={5} />

        <DeviceConfig />
      </Section>
    </Collapse>
  );
};

export default Connectivity;
