import { Box, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import sectionTogglesState from '../../store/section-toggles-state';

const SectionToggles = () => {
  const [sectionToggles, setSectionToggles] = useRecoilState(sectionTogglesState);

  return (
    <Box backgroundColor="#29293B" padding="10px">
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="rythm-measurement" mb="0">
          Rythm Measurement
        </FormLabel>
        <Switch
          id="rythm-measurement"
          size="sm"
          isChecked={sectionToggles['rythm-measurement']}
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
