import { Grid, GridItem } from '@chakra-ui/react';
import { displaySignalsState } from '../lib/store';
import { useAtomValue } from 'jotai';
import RawSignal from '../components/RawSignal';

const RawSignals = () => {
  const displaySignals = useAtomValue(displaySignalsState);

  return (
    <GridItem display={displaySignals ? 'block' : 'none'} marginRight={{ base: 0, md: 6 }}>
      <Grid
        gap={1}
        templateColumns={{
          base: '1fr',
          md: 'repeat(16, minmax(0, 1fr))',
        }}
        templateRows={{
          base: '1fr',
          md: 'repeat(8, minmax(0, 1fr))',
        }}
      >
        {[...new Array(128)].map((_, signal) => (
          <RawSignal key={signal + 1} signal={signal + 1} />
        ))}
      </Grid>
    </GridItem>
  );
};

export default RawSignals;
