import { Grid, GridItem, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Profile from '../components/Profile';
import RythmMeasurement from '../components/RythmMeasurement';
import type { NextPage } from 'next';

const H2 = ({ children }: { children: ReactNode }) => (
  <Heading as="h2" size="md" fontWeight="normal" noOfLines={1} textAlign="center" py="20px">
    {children}
  </Heading>
);

const Home: NextPage = () => {
  return (
    <main>
      <Grid templateColumns="1fr 4fr" gap={6}>
        <GridItem w="100%" h="10" marginTop="20">
          <Profile />
        </GridItem>
        <GridItem w="100%" h="10">
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem w="100%" h="10">
              <H2>Top Layer</H2>
            </GridItem>
            <GridItem w="100%" h="10">
              <H2>Measurement Layer</H2>
            </GridItem>
            <GridItem w="100%" h="10">
              <H2>Deep Layer</H2>
              <RythmMeasurement />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </main>
  );
};

export default Home;
