import { Grid, GridItem, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import Handle from '../components/Profile/handle';
import Profile from '../components/Profile';
import RythmMeasurement from '../components/RythmMeasurement';
import VideoStream from '../components/VideoStream';
import dynamic from 'next/dynamic';
import profileOpenState from '../store/profile-open-state';
import type { NextPage } from 'next';

const RawSignalsNoSSR = dynamic(() => import('../components/RawSignals'), { ssr: false });

const H2 = ({ children }: { children: ReactNode }) => (
  <Heading as="h2" size="md" fontWeight="normal" noOfLines={1} textAlign="center" py="20px">
    {children}
  </Heading>
);

const Home: NextPage = () => {
  const profileOpen = useRecoilValue(profileOpenState);

  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: profileOpen ? '300px auto' : '75px auto',
      }}
      gap={6}
      padding={{ base: 0, md: '0 6 0 0' }}
    >
      <GridItem marginTop="60px" transition="all 1s">
        {profileOpen ? <Profile /> : <Handle />}
      </GridItem>
      <GridItem>
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(3, minmax(0, 1fr))',
          }}
          gap={6}
        >
          <GridItem>
            <H2>Top Layer</H2>
            <VideoStream />
          </GridItem>
          <GridItem>
            <H2>Measurement Layer</H2>
            <RawSignalsNoSSR />
          </GridItem>
          <GridItem>
            <H2>Deep Layer</H2>
            <RythmMeasurement />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Home;
