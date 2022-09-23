import { GAP } from '../lib/constants';
import { Grid, GridItem } from '@chakra-ui/react';
import { displaySignalsState } from '../lib/store';
import { useAtomValue } from 'jotai';
import BiomarkerDetection from '../components/BiomarkerDetection';
import Connectivity from '../components/Connectivity';
import RhythmByBand from '../components/RhythmByBand';
import RhythmByChannel from '../components/RhythmByChannel';
import SectionToggles from '../components/SectionToggles';
import dynamic from 'next/dynamic';
import rawSignalsExtra from '../lib/raw-signals-extra';

const RhythmAllNoSSR = dynamic(() => import('../components/RhythmAll'), {
  ssr: false,
});

const Overview = () => {
  const displaySignals = useAtomValue(displaySignalsState);

  return (
    <GridItem display={displaySignals ? 'none' : 'block'} marginRight={{ base: 0, md: 6 }} w="100%">
      <SectionToggles />

      <Grid
        gap={GAP}
        gridAutoRows="1fr"
        templateColumns={{
          base: '1fr',
          md: 'repeat(4, minmax(0, 1fr))',
        }}
      >
        <RhythmAllNoSSR datasets={rawSignalsExtra} />

        <RhythmByChannel />

        <RhythmByBand />

        <Connectivity />

        <BiomarkerDetection />
      </Grid>
    </GridItem>
  );
};

export default Overview;
