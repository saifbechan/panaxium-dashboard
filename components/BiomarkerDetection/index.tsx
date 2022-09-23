import { Collapse } from '@chakra-ui/react';
import { sectionTogglesState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import DeviceConfig from '../DeviceConfig';
import Section from '../Section';

const BiomarkerDetection = () => {
  const sectionToggles = useAtomValue(sectionTogglesState);

  return (
    <Collapse animateOpacity in={sectionToggles['biomarker_detection']}>
      <Section border="1px solid #401D56" info="Some extra information" title="Biomarker detection">
        <DeviceConfig />
      </Section>
    </Collapse>
  );
};

export default BiomarkerDetection;
