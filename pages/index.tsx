import { Collapse, Grid, GridItem, Heading, Spacer } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import Handle from '../components/Profile/handle';
import ImpedanceMeasurement from '../components/ImpedanceMeasurement';
import PSDMeasurement from '../components/PSDmeasurement';
import Profile from '../components/Profile';
import RythmMeasurement from '../components/RythmMeasurement';
import SectionToggles from '../components/SectionToggles';
import VideoStream from '../components/VideoStream';
import dynamic from 'next/dynamic';
import profileOpenState from '../store/profile-open-state';
import sectionTogglesState from '../store/section-toggles-state';
import type { NextPage } from 'next';

const RawSignalsNoSSR = dynamic(() => import('../components/RawSignals'), { ssr: false });

const GAP = { base: 2, md: 5 };

const H2 = ({ children }: { children: ReactNode }) => (
  <Heading as="h2" size="md" fontWeight="normal" noOfLines={1} textAlign="center" py="20px">
    {children}
  </Heading>
);

const Home: NextPage = () => {
  const profileOpen = useRecoilValue(profileOpenState);
  const sectionToggles = useRecoilValue(sectionTogglesState);

  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: profileOpen ? '300px auto' : '75px auto',
      }}
      gap={GAP}
      padding={{ base: 0, md: '0 6 0 0' }}
    >
      <GridItem marginTop="60px" transition="all 1s">
        {profileOpen ? <Profile /> : <Handle />}
      </GridItem>
      <GridItem>
        <GridItem marginTop="60px">
          <SectionToggles />
        </GridItem>
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(3, minmax(0, 1fr))',
          }}
          gap={GAP}
        >
          <GridItem>
            <H2>Top Layer</H2>
            <VideoStream />
          </GridItem>
          <GridItem>
            <H2>Measurement Layer</H2>
            <Grid templateColumns="repeat(2, minmax(0, 1fr))" gap={GAP}>
              <ImpedanceMeasurement />
              <PSDMeasurement />
            </Grid>
            <Spacer h={GAP} />
            <RawSignalsNoSSR
              data={{
                backgroundColor: '#61586F',
                borderColor: '#61586F',
                cubicInterpolationMode: 'monotone',
                data: [],
                pointRadius: 0,
              }}
              signal={0}
            />
          </GridItem>
          <GridItem>
            <H2>Deep Layer</H2>
            <Collapse in={sectionToggles['rythm-measurement']} animateOpacity>
              <RythmMeasurement />
              <Spacer h={GAP} />
            </Collapse>
            <RawSignalsNoSSR
              data={{
                backgroundColor: '#472B5E',
                borderColor: '#59486A',
                cubicInterpolationMode: 'monotone',
                data: [],
                pointRadius: 0,
              }}
              signal={1}
            />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Home;
