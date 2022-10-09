import { Box, ChakraProps, HStack, VStack } from '@chakra-ui/react';

const Dot = (props: ChakraProps) => {
  return (
    <Box
      backgroundColor="#48438C"
      borderRadius="50%"
      boxSize={2}
      color="gray.300"
      fontSize={10}
      textAlign="center"
      {...props}
      lineHeight={4}
    />
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
    <Dot left={2} position="absolute" />
    <HStack spacing={2}>
      <Dot />
      <Dot />
    </HStack>
  </VStack>
);

const DeviceConfigReset = () => {
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

export default DeviceConfigReset;
