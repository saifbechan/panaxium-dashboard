import { Box, ChakraProps, HStack, Tooltip, VStack } from '@chakra-ui/react';
import { selectedSignalState } from '../../lib/store';
import { useAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';

let count = 0;

const Dot = (props: ChakraProps) => {
  const countRef = useRef(0);
  const [selectedSignal, setSelectedSignal] = useAtom(selectedSignalState);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    if (countRef.current !== 0) return;

    count += 1;
    countRef.current = count;

    setRerender(!rerender);
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
    <Dot left={3} position="absolute" top={1} />
    <HStack spacing={2}>
      <Dot />
      <Dot />
    </HStack>
  </VStack>
);

const DeviceConfigWithAction = () => {
  return (
    <VStack spacing={4}>
      <HStack justifyContent="space-around" width="100%">
        <FiveDots />
        <FourDots />
        <FourDots />
        <FiveDots />
      </HStack>
      <HStack justifyContent="space-around" width="100%">
        <FourDots />
        <FourDots />
        <FourDots />
        <FourDots />
      </HStack>
      <HStack justifyContent="space-around" width="100%">
        <FourDots />
        <FourDots />
        <FourDots />
        <FourDots />
      </HStack>
      <HStack justifyContent="space-around" width="100%">
        <FourDots />
        <FourDots />
        <FourDots />
        <FourDots />
      </HStack>
      <HStack justifyContent="space-around" width="100%">
        <FourDots />
        <FourDots />
        <FourDots />
        <FourDots />
      </HStack>
      <HStack justifyContent="space-around" width="100%">
        <FourDots />
        <FourDots />
        <FourDots />
        <FourDots />
      </HStack>
      <HStack justifyContent="space-around" width="100%">
        <FourDots />
        <FourDots />
        <FourDots />
        <FourDots />
      </HStack>
      <HStack justifyContent="space-around" width="100%">
        <ThreeDots />
        <FourDots />
        <FourDots />
        <ThreeDots />
      </HStack>
    </VStack>
  );
};

export default DeviceConfigWithAction;
