import { Box, ChakraProps, Grid, HStack, VStack } from '@chakra-ui/react';
import ColorScale from '../ColorScale';

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
    <HStack alignItems="flex-start" justifyContent="center" spacing={10}>
      <Grid
        gridColumnGap={5}
        gridRowGap={2}
        gridTemplateColumns="repeat(4, 1fr)"
        gridTemplateRows="repeat(8, 1fr)"
      >
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

      <ColorScale />
    </HStack>
  );
};

export default DeviceConfigReset;
