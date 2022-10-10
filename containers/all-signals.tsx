import { Grid, GridItem } from '@chakra-ui/react';
import { displaySignalsState } from '../lib/store';
import { useAtomValue } from 'jotai';
import RhythmAll from '../components/RhythmAll';
import SectionToggles from '../components/SectionToggles';

const AllSignals = () => {
  const displaySignals = useAtomValue(displaySignalsState);

  return (
    <GridItem display={displaySignals ? 'none' : 'block'} marginRight={{ base: 0, md: 6 }} w="100%">
      <SectionToggles />
      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(6, minmax(0, 1fr))',
        }}
      >
        <RhythmAll />
      </Grid>
    </GridItem>
  );
};

export default AllSignals;
