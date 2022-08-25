import { Box, Icon } from '@chakra-ui/react';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import profileOpenState from '../../store/profile-open-state';

const Handle = () => {
  const [_, setProfileOpen] = useRecoilState(profileOpenState);

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
