import { Collapse } from '@chakra-ui/react';
import { sectionTogglesState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import Section from '../Section';

const RythmByChannel = () => {
  const sectionToggles = useAtomValue(sectionTogglesState);

  return (
    <Collapse animateOpacity in={sectionToggles['rythm_channel']}>
      <Section border="1px solid #401D56" info="Some extra information" title="Rythm by channel">
        RythmByChannel
      </Section>
    </Collapse>
  );
};

export default RythmByChannel;
