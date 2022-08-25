import { Box, Icon } from '@chakra-ui/react';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { profileOpenState } from '../../lib/store';
import { useSetAtom } from 'jotai';

const Handle = () => {
  const setProfileOpen = useSetAtom(profileOpenState);

  return (
    <Box backgroundColor="#0C091E" borderRadius={{ base: 0, md: '0 15px 15px 0' }} padding="20px">
      <Box
        alignItems="center"
        cursor="pointer"
        display="flex"
        justifyContent="center"
        padding="1"
        onClick={() => setProfileOpen(true)}
      >
        <Icon as={BsChevronDoubleRight} boxSize={5} />
      </Box>
    </Box>
  );
};

export default Handle;
