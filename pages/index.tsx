import { GAP } from '../lib/constants';
import { Grid, GridItem, Spacer } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import Handle from '../components/Profile/handle';
import ImpedanceMeasurement from '../components/ImpedanceMeasurement';
import PSDMeasurement from '../components/PSDmeasurement';
import Profile from '../components/Profile';
import RythmMeasurement from '../components/RythmMeasurement';
import SectionToggles from '../components/SectionToggles';
import dynamic from 'next/dynamic';
import profileOpenState from '../store/profile-open-state';
import rawSignals from '../lib/raw-signals';
import sectionTogglesState from '../store/section-toggles-state';
import type { NextPage } from 'next';

const RawSignalsNoSSR = dynamic(() => import('../components/RawSignals'), { ssr: false });

const Home: NextPage = () => {
  const profileOpen = useRecoilValue(profileOpenState);
  const sectionToggles = useRecoilValue(sectionTogglesState);

  return (
    <Grid
      gap={GAP}
      padding={{ base: 0, md: '0 6 0 0' }}
      templateColumns={{
        base: '1fr',
        md: profileOpen ? '300px auto' : '75px auto',
      }}
    >
      <GridItem marginTop="60px" transition="all 1s">
        {profileOpen ? <Profile /> : <Handle />}
      </GridItem>
      <GridItem>
        <GridItem marginTop="60px">
          <SectionToggles />
          <Spacer h={GAP} />
        </GridItem>
        <Grid
          gap={GAP}
          templateColumns={{
            base: '1fr',
            md: 'repeat(3, minmax(0, 1fr))',
          }}
        >
          <RythmMeasurement on={sectionToggles['rythm-measurement']} />
          <Grid gap={GAP} templateColumns="repeat(2, minmax(0, 1fr))">
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
