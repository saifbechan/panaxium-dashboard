import { Avatar, Center, Divider, Grid, GridItem, Heading, Tag, TagLabel } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';
import Profile from '../components/Profile';
import RythmMeasurement from '../components/RythmMeasurement';

const Home: NextPage = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      <GridItem w="100%" h="10">
        <Heading as="h2" size="md" noOfLines={1} textAlign="center" py="20px">
          &nbsp;
        </Heading>
        <Profile />
      </GridItem>
      <GridItem w="100%" h="10">
        <Heading as="h2" size="md" noOfLines={1} textAlign="center" py="20px">
          Top Layer
        </Heading>
      </GridItem>
      <GridItem w="100%" h="10">
        <Heading as="h2" size="md" noOfLines={1} textAlign="center" py="20px">
          Measurement Layer
        </Heading>
      </GridItem>
      <GridItem w="100%" h="10">
        <Heading as="h2" size="md" noOfLines={1} textAlign="center" py="20px">
          Deep Layer
        </Heading>
        <RythmMeasurement />
      </GridItem>
    </Grid>
  );
};

export default Home;
