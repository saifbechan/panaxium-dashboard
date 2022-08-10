import { Grid, GridItem, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Profile from '../components/Profile';
import RawSignals from '../components/RawSignals';
import RythmMeasurement from '../components/RythmMeasurement';
import VideoStream from '../components/VideoStream';
import type { NextPage } from 'next';

const H2 = ({ children }: { children: ReactNode }) => (
  <Heading as="h2" size="md" fontWeight="normal" noOfLines={1} textAlign="center" py="20px">
    {children}
  </Heading>
);

const Home: NextPage = () => {
  return (
    <Grid templateColumns={{ base: '1fr', md: '1fr 4fr' }}>
      <GridItem w="100%" marginTop="60px">
        <Profile />
      </GridItem>
      <GridItem w="100%" padding="0 20px">
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          <GridItem w="100%" h="10">
            <H2>Top Layer</H2>
            <VideoStream />
          </GridItem>
          <GridItem w="100%" h="10">
            <H2>Measurement Layer</H2>
            <RawSignals />
          </GridItem>
          <GridItem w="100%" h="10">
            <H2>Deep Layer</H2>
            <RythmMeasurement />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Home;
