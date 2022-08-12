import { Box } from '@chakra-ui/react';
import Section from '../Section';
import YouTube from 'react-youtube';

const VideoStream = () => {
  return (
    <Section title="Video Stream" info="Some extra information" boxed={false}>
      <Box overflow="hidden" borderRadius="10px">
        <YouTube videoId="avl7lbkdQKA" opts={{ width: '100%' }} />
      </Box>
    </Section>
  );
};

export default VideoStream;
