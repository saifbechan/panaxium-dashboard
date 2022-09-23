import { Collapse } from '@chakra-ui/react';
import { sectionTogglesState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import DeviceConfig from '../DeviceConfig';
import Section from '../Section';

const RhythmByBand = () => {
  const sectionToggles = useAtomValue(sectionTogglesState);

  return (
    <Collapse animateOpacity in={sectionToggles['rhythm_band']}>
      <Section border="1px solid #401D56" info="Some extra information" title="Rhythm by band">
        <DeviceConfig />
      </Section>
    </Collapse>
  );
};

export default RhythmByBand;
