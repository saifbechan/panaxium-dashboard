import { Collapse } from '@chakra-ui/react';
import { sectionTogglesState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import Section from '../Section';

const RythmByBand = () => {
  const sectionToggles = useAtomValue(sectionTogglesState);

  return (
    <Collapse animateOpacity in={sectionToggles['rythm_band']}>
      <Section border="1px solid #401D56" info="Some extra information" title="Rythm by band">
        RythmByBand
      </Section>
    </Collapse>
  );
};

export default RythmByBand;
