import { Box, Grid, Heading, Spacer, Text, VStack } from '@chakra-ui/react';
import { BsGearFill, BsThreeDotsVertical, BsXLg } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import { profileOpenState } from '../../lib/store';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import sb from './saif-bechan-teaser-image-rounded-modified.png';

const Profile = () => {
  const setProfileOpen = useSetAtom(profileOpenState);

  return (
    <Box backgroundColor="#0C091E" borderRadius={{ base: 0, md: '0 15px 15px 0' }} padding="30px">
      <Grid gap={6} templateColumns="1fr 1fr 8fr 1fr">
        <Icon as={BsThreeDotsVertical} boxSize={6} cursor="pointer" />
        <Icon as={BsGearFill} boxSize={6} cursor="pointer" />
        <Spacer />
        <Box
          alignItems="center"
          cursor="pointer"
          display="flex"
          justifyContent="center"
          padding="1"
          onClick={() => setProfileOpen(false)}
        >
          <Icon as={BsXLg} boxSize={5} />
        </Box>
      </Grid>

      <VStack color="text.dimmed" padding="30px 0" spacing={8}>
        <Text fontSize="lg">DATE: November 5, 2019</Text>

        <Box
          backgroundColor="white"
          border="4px solid white"
          borderRadius="50%"
          boxSize="40"
          position="relative"
        >
          <Image alt="avatar" layout="fill" priority src={sb} />
        </Box>

        <Heading as="h1" size="xl">
          Saif Bechan
        </Heading>
      </VStack>

      <Box background="linear-gradient(to right, #2657bb, #45bdc8)" h={1} />

      <Text color="text.dimmed" fontSize="sm" padding="20px 0 10px 0">
        Information about the patient:
      </Text>
      <VStack align="stretch" spacing={2}>
        <Box>
          <Text color="text.dimmed" fontSize="md" textTransform="uppercase">
            Weight
          </Text>
          <Text fontSize="md" fontWeight="bold">
            70kg
          </Text>
        </Box>
        <Box>
          <Text color="text.dimmed" fontSize="md" textTransform="uppercase">
            Height
          </Text>
          <Text fontSize="md" fontWeight="bold">
            1.75 cm
          </Text>
        </Box>
        <Box>
          <Text color="text.dimmed" fontSize="md" textTransform="uppercase">
            N
          </Text>
          <Text fontSize="md" fontWeight="bold">
            09876
          </Text>
        </Box>
      </VStack>

      <Text color="text.dimmed" fontSize="sm" padding="20px 0 10px 0">
        ECOG Specifications
      </Text>
    </Box>
  );
};

export default Profile;
