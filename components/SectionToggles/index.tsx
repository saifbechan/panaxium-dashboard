import { Box, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { SectionToggleIds, displaySignalsState, sectionTogglesState } from '../../lib/store';
import { useAtom, useAtomValue } from 'jotai';

const Toggle = ({ id, label }: { id: keyof SectionToggleIds; label: string }) => {
  const displaySignals = useAtomValue(displaySignalsState);
  const [sectionToggles, setSectionTogglesState] = useAtom(sectionTogglesState);

  return (
    <>
      <FormLabel fontSize="sm" mb="0">
        {label}
      </FormLabel>
      <Switch
        colorScheme="purple"
        disabled={displaySignals}
        isChecked={sectionToggles[id]}
        mr={8}
        size="sm"
        onChange={() =>
          setSectionTogglesState({
            ...sectionToggles,
            [id]: !sectionToggles[id],
          })
        }
      />
    </>
  );
};

const SectionToggles = () => {
  return (
    <Box backgroundColor="#29293B" mb={2} padding="10px" w="100%">
      <FormControl alignItems="center" display="flex">
        <Toggle id="rhythm_all" label="All Signals" />
        <Toggle id="rhythm_channel" label="Rhythm (channel)" />
        <Toggle id="rhythm_band" label="Rhythm (band)" />
        <Toggle id="connectivity" label="Connectivity" />
        <Toggle id="biomarker_detection" label="Biomarker detection" />
      </FormControl>
    </Box>
  );
};

export default SectionToggles;
