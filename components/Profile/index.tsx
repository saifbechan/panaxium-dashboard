import { Box, Grid, Heading, Spacer, Text, VStack } from '@chakra-ui/react';
import { BsGearFill, BsThreeDotsVertical, BsXLg } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import { profileOpenState } from '../../lib/store';
import { useSetAtom } from 'jotai';
import Device from '../Device';
import SectionToggles from '../SectionToggles';

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

      <Heading as="h1" mt={10} size="md">
        Saif Bechan
      </Heading>

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

      <Spacer h={10} />

      <SectionToggles />

      <Spacer h={10} />

      <Device />
    </Box>
  );
};

export default Profile;
