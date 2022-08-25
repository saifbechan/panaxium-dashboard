import { Box, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { sectionTogglesState } from '../../lib/store';
import { useAtom } from 'jotai';

const SectionToggles = () => {
  const [sectionToggles, setSectionToggles] = useAtom(sectionTogglesState);

  return (
    <Box backgroundColor="#29293B" padding="10px">
      <FormControl alignItems="center" display="flex">
        <FormLabel htmlFor="rythm-measurement" mb="0">
          Rythm Measurement
        </FormLabel>
        <Switch
          id="rythm-measurement"
          isChecked={sectionToggles['rythm-measurement']}
          size="sm"
          onChange={() =>
            setSectionToggles({
              ...sectionToggles,
              'rythm-measurement': !sectionToggles['rythm-measurement'],
            })
          }
        />
      </FormControl>
    </Box>
  );
};

export default SectionToggles;
