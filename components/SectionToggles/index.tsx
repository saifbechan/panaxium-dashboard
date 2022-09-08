import { Box, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { displaySignalsState } from '../../lib/store';
import { useAtom } from 'jotai';

const Toggle = ({ label }: { label: string }) => {
  const [displaySignals, setDisplaySignals] = useAtom(displaySignalsState);

  return (
    <>
      <FormLabel fontSize="sm" mb="0">
        {label}
      </FormLabel>
      <Switch
        colorScheme="purple"
        mr={8}
        size="sm"
        onChange={() => setDisplaySignals(!displaySignals)}
      />
    </>
  );
};

const SectionToggles = () => {
  return (
    <Box backgroundColor="#29293B" padding="10px">
      <FormControl alignItems="center" display="flex">
        <Toggle label="Display EEG" />
      </FormControl>
    </Box>
  );
};

export default SectionToggles;
