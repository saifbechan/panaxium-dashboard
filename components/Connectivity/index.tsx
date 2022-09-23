import { Collapse } from '@chakra-ui/react';
import { sectionTogglesState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import DeviceConfig from '../DeviceConfig';
import Section from '../Section';

const Connectivity = () => {
  const sectionToggles = useAtomValue(sectionTogglesState);

  return (
    <Collapse animateOpacity in={sectionToggles['connectivity']}>
      <Section border="1px solid #401D56" info="Some extra information" title="Connectivity">
        <DeviceConfig />
      </Section>
    </Collapse>
  );
};

export default Connectivity;
