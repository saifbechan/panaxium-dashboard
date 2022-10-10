import { Collapse, Select, Spacer } from '@chakra-ui/react';
import { sectionTogglesState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import DeviceConfig from '../DeviceConfig';
import Section from '../Section';
import dataSignals from '../../data/data-signals';

const BiomarkerDetection = () => {
  const sectionToggles = useAtomValue(sectionTogglesState);

  return (
    <Collapse
      animateOpacity
      in={sectionToggles['biomarker_detection']}
      style={{ gridColumn: 'span 4' }}
    >
      <Section border="1px solid #401D56" id="biomarker_detection" title="All Signals">
        <Select
          backgroundColor="#401D56"
          border="1px solid gray"
          borderRadius={2}
          fontWeight="normal"
          margin="0 auto"
          maxW="90%"
          size="xs"
          variant="outlined"
        >
          {['HFO'].map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </Select>

        <Spacer h={5} />

        <DeviceConfig dataset={dataSignals} />
      </Section>
    </Collapse>
  );
};

export default BiomarkerDetection;
