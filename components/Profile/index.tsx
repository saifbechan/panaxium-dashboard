import { Box, Grid, Spacer, Text } from '@chakra-ui/react';
import { BsGearFill, BsThreeDotsVertical, BsXLg } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import { profileOpenState } from '../../lib/store';
import { useSetAtom } from 'jotai';
import DeviceConfigWithAction from '../DeviceConfigWithAction';
import EEGToggle from '../EEGToggle';

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

      <Text as="h1" fontSize="xl" fontWeight="bold" mt={10}>
        Name: John Doe
      </Text>
      <Text fontSize="md" mb={10}>
        Patient #: 86530B
      </Text>

      <EEGToggle />

      <DeviceConfigWithAction />
    </Box>
  );
};

export default Profile;
