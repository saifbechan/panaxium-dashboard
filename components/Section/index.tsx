import { Box, Heading, Icon, Tooltip } from '@chakra-ui/react';
import { BsQuestionCircle } from 'react-icons/bs';
import { ReactNode } from 'react';

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
}) => (
  <Box backgroundColor="#29293B" padding="10px">
    <Box textAlign="right">
      <Tooltip label={info} hasArrow>
        <span>
          <Icon as={BsQuestionCircle} color="text.dimmed" />
        </span>
      </Tooltip>
    </Box>

    <Heading fontWeight="normal" as="h4" size="sm" color="text.dimmed" padding="0 0 20px 0">
      {title}
    </Heading>

    {boxed ? <Box h="225px">{children}</Box> : <>{children}</>}
  </Box>
);

export default Section;
