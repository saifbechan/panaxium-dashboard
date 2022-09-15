import { GAP } from '../lib/constants';
import { Grid, GridItem } from '@chakra-ui/react';
import BiomarkerDetection from '../components/BiomarkerDetection';
import Connectivity from '../components/Connectivity';
import RythmByBand from '../components/RythmByBand';
import RythmByChannel from '../components/RythmByChannel';
import dynamic from 'next/dynamic';
import rawSignalsExtra from '../lib/raw-signals-extra';

const RythmAllNoSSR = dynamic(() => import('../components/RythmAll'), {
  ssr: false,
});

const Overview = () => {
  return (
    <GridItem marginRight={{ base: 0, md: 6 }} w="100%">
      <Grid
        gap={GAP}
        templateColumns={{
          base: '1fr',
          md: 'repeat(4, minmax(0, 1fr))',
        }}
      >
        <RythmAllNoSSR datasets={rawSignalsExtra} />

        <RythmByChannel />

        <RythmByBand />

        <Connectivity />

        <BiomarkerDetection />
      </Grid>
    </GridItem>
  );
};

export default Overview;
