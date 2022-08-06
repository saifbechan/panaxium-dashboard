import { Avatar, Center, Divider, Grid, GridItem, Tag, TagLabel } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';
import Profile from '../components/Profile';

const Home: NextPage = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      <GridItem w="100%" h="10">
        <Profile />
      </GridItem>
      <GridItem w="100%" h="10" />
      <GridItem w="100%" h="10" />
      <GridItem w="100%" h="10" />
    </Grid>
  );
};

export default Home;
