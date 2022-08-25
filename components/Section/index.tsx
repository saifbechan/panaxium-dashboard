import { Box, GridItem, Heading, Icon, Tooltip } from '@chakra-ui/react';
import { BsQuestionCircle } from 'react-icons/bs';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import profileOpenState from '../../store/profile-open-state';

const Section = ({
  title,
  info,
  boxed = true,
  children,
}: {
  title: string;
  info: string;
  boxed?: boolean;
  children: ReactNode;
}) => {
  const profileOpen = useRecoilValue(profileOpenState);

  return (
    <GridItem>
      <Box backgroundColor="#29293B" padding="10px">
        <Box textAlign="right">
          <Tooltip hasArrow label={info}>
            <span>
              <Icon as={BsQuestionCircle} color="text.dimmed" />
            </span>
          </Tooltip>
        </Box>

        <Heading as="h4" color="text.dimmed" fontWeight="normal" padding="0 0 20px 0" size="sm">
          {title}
        </Heading>

        {boxed ? <Box h={profileOpen ? '225px' : '250px'}>{children}</Box> : <>{children}</>}
      </Box>
    </GridItem>
  );
};

export default Section;
