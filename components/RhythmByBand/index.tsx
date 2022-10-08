import { Collapse, Select, Spacer } from '@chakra-ui/react';
import { sectionTogglesState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import DeviceConfig from '../DeviceConfig';
import Section from '../Section';

const RhythmByBand = () => {
  const sectionToggles = useAtomValue(sectionTogglesState);

  return (
    <Collapse animateOpacity in={sectionToggles['rhythm_band']}>
      <Section border="1px solid #401D56" info="Some extra information" title="Rhythm by band">
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
          {['Delta', 'Theta', 'Alpha', 'Beta', 'Gamma'].map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </Select>

        <Spacer h={5} />

        <DeviceConfig />
      </Section>
    </Collapse>
  );
};

export default RhythmByBand;
