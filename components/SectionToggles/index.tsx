import { Box, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { SectionTogglesStateType, sectionTogglesState } from '../../lib/store';
import { useAtom } from 'jotai';

const Toggle = ({ id, label }: { id: keyof SectionTogglesStateType; label: string }) => {
  const [sectionToggles, setSectionToggles] = useAtom(sectionTogglesState);

  return (
    <>
      <FormLabel fontSize="sm" htmlFor={id} mb="0">
        {label}
      </FormLabel>
      <Switch
        colorScheme="purple"
        id={id}
        mr={8}
        size="sm"
        onChange={() =>
          setSectionToggles({
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
    <Box backgroundColor="#29293B" padding="10px">
      <FormControl alignItems="center" display="flex">
        <Toggle id="rythm-measurement" label="Rythm Measurement" />
        <Toggle id="psd-measurement" label="PSD measurement" />
      </FormControl>
    </Box>
  );
};

export default SectionToggles;
