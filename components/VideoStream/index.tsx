import { Box } from '@chakra-ui/react';
import Section from '../Section';
import YouTube from 'react-youtube';

const VideoStream = () => {
  return (
    <Section boxed={false} info="Some extra information" title="Video Stream">
      <Box borderRadius="10px" overflow="hidden">
        <YouTube opts={{ width: '100%' }} videoId="avl7lbkdQKA" />
      </Box>
    </Section>
  );
};

export default VideoStream;
