import { GAP } from '../lib/constants';
import { Grid, GridItem, Spacer } from '@chakra-ui/react';
import { profileOpenState } from '../lib/store';
import { useAtomValue } from 'jotai';
import Handle from '../components/Profile/handle';
import ImpedanceMeasurement from '../components/ImpedanceMeasurement';
import PSDMeasurement from '../components/PSDmeasurement';
import Profile from '../components/Profile';
import RythmMeasurement from '../components/RythmMeasurement';
import SectionToggles from '../components/SectionToggles';
import dynamic from 'next/dynamic';
import rawSignals from '../lib/raw-signals';
import type { NextPage } from 'next';

const RawSignalsNoSSR = dynamic(() => import('../components/RawSignal'), { ssr: false });

const Home: NextPage = () => {
  const profileOpen = useAtomValue(profileOpenState);

  return (
    <Grid
      gap={GAP}
      templateColumns={{
        base: '1fr',
        md: profileOpen ? '300px auto' : '75px auto',
      }}
    >
      <GridItem transition="all 1s">{profileOpen ? <Profile /> : <Handle />}</GridItem>
      <GridItem marginRight={{ base: 0, md: 6 }}>
        <GridItem>
          <SectionToggles />
          <Spacer h={GAP} />
        </GridItem>
        <Grid
          gap={GAP}
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, minmax(0, 1fr))',
          }}
        >
          <RythmMeasurement />

          <Grid autoColumns="minmax(0, 1fr)" autoFlow="column" gap={GAP}>
            <ImpedanceMeasurement />
            <PSDMeasurement />
          </Grid>

          {rawSignals.map((datasets, signal) => (
            <RawSignalsNoSSR key={signal} datasets={[datasets]} signal={signal} />
          ))}
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Home;
