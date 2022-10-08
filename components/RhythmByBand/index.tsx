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
        <Select borderColor="gray.400" color="gray.400" placeholder="Select channel" size="xs">
          {' '}
          {[...new Array(128)].map((_item, index) => (
            <option key={index} value="option3">
              Channel {index + 1}
            </option>
          ))}
        </Select>

        <Spacer h={5} />

        <DeviceConfig />
      </Section>
    </Collapse>
  );
};

export default RhythmByBand;
