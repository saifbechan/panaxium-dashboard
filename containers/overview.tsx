import { GAP } from '../lib/constants';
import { Grid, GridItem, Spacer } from '@chakra-ui/react';
import { displaySignalsState } from '../lib/store';
import { useAtomValue } from 'jotai';
import BiomarkerDetection from '../components/BiomarkerDetection';
import Connectivity from '../components/Connectivity';
import RhythmAll from '../components/RhythmAll';
import RhythmByBand from '../components/RhythmByBand';
import RhythmByChannel from '../components/RhythmByChannel';
import SectionToggles from '../components/SectionToggles';

const Overview = () => {
  const displaySignals = useAtomValue(displaySignalsState);

  return (
    <GridItem display={displaySignals ? 'none' : 'block'} marginRight={{ base: 0, md: 6 }} w="100%">
      <SectionToggles />

      <Grid
        gap={GAP}
        templateColumns={{
          base: '1fr',
          md: 'repeat(12, minmax(0, 1fr))',
        }}
      >
        <RhythmAll />

        <RhythmByChannel />
      </Grid>

      <Spacer h={2} />

      <Grid
        gap={GAP}
        templateColumns={{
          base: '1fr',
          md: 'repeat(12, minmax(0, 1fr))',
        }}
      >
        <RhythmByBand />

        <Connectivity />

        <BiomarkerDetection />
      </Grid>
    </GridItem>
  );
};

export default Overview;
