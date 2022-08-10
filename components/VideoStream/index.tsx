import { Box, Tooltip as CTooltip, Heading } from '@chakra-ui/react';
import { BsQuestionCircle } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import YouTube from 'react-youtube';

const VideoStream = () => {
  return (
    <Box backgroundColor="#29293B" padding="10px">
      <Box textAlign="right">
        <CTooltip label="Some extra information" hasArrow>
          <span>
            <Icon as={BsQuestionCircle} color="text.dimmed" />
          </span>
        </CTooltip>
      </Box>

      <Heading fontWeight="normal" as="h4" size="sm" color="text.dimmed" padding="0 0 20px 0">
        Video Stream
      </Heading>

      <Box overflow="hidden" borderRadius="10px">
        <YouTube videoId="avl7lbkdQKA" opts={{ width: '100%' }} />
      </Box>
    </Box>
  );
};

export default VideoStream;
