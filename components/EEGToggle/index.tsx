import { Box, ChakraProps, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { displaySignalsState } from '../../lib/store';
import { useAtom } from 'jotai';

const EEGToggle = (props: ChakraProps) => {
  const [displaySignals, setDisplaySignals] = useAtom(displaySignalsState);

  return (
    <Box backgroundColor="#29293B" mb={4} padding="8px" w="100%" {...props}>
      <FormControl alignItems="center" display="flex">
        <FormLabel fontSize="sm" mb="0">
          All Channels
        </FormLabel>
        <Switch
          colorScheme="purple"
          isChecked={displaySignals}
          mr={8}
          size="sm"
          onChange={() => setDisplaySignals(!displaySignals)}
        />
      </FormControl>
    </Box>
  );
};

export default EEGToggle;
