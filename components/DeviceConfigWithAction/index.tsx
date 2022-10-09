import { Box, ChakraProps, Grid, HStack, Tooltip, VStack } from '@chakra-ui/react';
import { selectedSignalState } from '../../lib/store';
import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';

let count = 0;

const Dot = (props: ChakraProps) => {
  const countRef = useRef(0);
  const [selectedSignal, setSelectedSignal] = useAtom(selectedSignalState);

  useEffect(() => {
    if (countRef.current !== 0) return;

    count += 1;
    countRef.current = count;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tooltip label={countRef.current}>
      <Box
        _hover={{
          backgroundColor: '#48438C',
        }}
        backgroundColor={selectedSignal === countRef.current ? '#48438C' : '#61586F'}
        borderRadius="50%"
        boxSize={4}
        color="gray.300"
        fontSize={10}
        textAlign="center"
        onClick={() => {
          setSelectedSignal(countRef.current);
        }}
        {...props}
        cursor="pointer"
        lineHeight={4}
        transition="1s all"
      />
    </Tooltip>
  );
};

const ThreeDots = () => (
  <VStack spacing={1}>
    <Dot />
    <Dot />
    <Dot />
  </VStack>
);

const FourDots = () => (
  <VStack spacing={2}>
    <HStack spacing={2}>
      <Dot />
      <Dot />
    </HStack>
    <HStack spacing={2}>
      <Dot />
      <Dot />
    </HStack>
  </VStack>
);

const FiveDots = () => (
  <VStack position="relative" spacing={2}>
    <HStack spacing={2}>
      <Dot />
      <Dot />
    </HStack>
    <Dot left={5} position="absolute" top={1} />
    <HStack spacing={2}>
      <Dot />
      <Dot />
    </HStack>
  </VStack>
);

const DeviceConfigWithAction = () => {
  return (
    <Grid columnGap={0} gridTemplateColumns="repeat(4, 1fr)" rowGap={5}>
      <FiveDots />
      <FourDots />
      <FourDots />
      <FiveDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <FourDots />
      <ThreeDots />
      <FourDots />
      <FourDots />
      <ThreeDots />
    </Grid>
  );
};

export default DeviceConfigWithAction;
