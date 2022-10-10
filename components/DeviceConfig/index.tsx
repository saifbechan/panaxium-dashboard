import { Box, ChakraProps, Grid, HStack, VStack } from '@chakra-ui/react';
import { ticksState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import { useEffect, useRef } from 'react';
import ColorScale from '../ColorScale';
import heatMapColorforValue from '../../lib/heatmap-colors';

const DeviceConfig = ({
  dataset,
  highlight = false,
}: {
  dataset: number[][][];
  highlight?: boolean;
}) => {
  const Dot = ({
    index,
    highlight = false,
    ...props
  }: { index: number; highlight?: boolean } & ChakraProps) => {
    const ticks = useAtomValue(ticksState);
    const ticksRef = useRef(0);

    useEffect(() => {
      if (ticks % 5 !== 0) return;

      ticksRef.current = ticksRef.current < 19 ? ticksRef.current + 1 : 0;
    }, [ticks]);

    return (
      <Box
        backgroundColor={heatMapColorforValue(dataset[ticksRef.current][index][1])}
        borderRadius="50%"
        boxSize={2}
        fontSize={10}
        textAlign="center"
        {...props}
        lineHeight={4}
        outline={highlight ? '2px solid red' : 'none'}
        outlineOffset="1px"
        transition="1s all"
      />
    );
  };

  const ThreeDots = ({ indexes }: { indexes: [number, number, number] }) => (
    <VStack spacing={1}>
      <Dot index={indexes[0]} />
      <Dot index={indexes[1]} />
      <Dot index={indexes[2]} />
    </VStack>
  );

  const FourDots = ({
    indexes,
    highlight = false,
  }: {
    indexes: [number, number, number, number];
    highlight?: boolean;
  }) => (
    <VStack spacing={2}>
      <HStack spacing={2}>
        <Dot index={indexes[0]} />
        <Dot highlight={highlight} index={indexes[1]} />
      </HStack>
      <HStack spacing={2}>
        <Dot index={indexes[2]} />
        <Dot index={indexes[3]} />
      </HStack>
    </VStack>
  );

  const FiveDots = ({ indexes }: { indexes: [number, number, number, number, number] }) => (
    <VStack position="relative" spacing={2}>
      <HStack spacing={2}>
        <Dot index={indexes[0]} />
        <Dot index={indexes[1]} />
      </HStack>
      <Dot index={indexes[2]} left={2} position="absolute" />
      <HStack spacing={2}>
        <Dot index={indexes[3]} />
        <Dot index={indexes[4]} />
      </HStack>
    </VStack>
  );
  return (
    <HStack alignItems="flex-start" justifyContent="center" mb={2} spacing={10}>
      <Grid gap={4} gridTemplateColumns="repeat(4, 1fr)">
        <FiveDots indexes={[0, 1, 2, 3, 4]} />
        <FourDots indexes={[5, 6, 7, 8]} />
        <FourDots indexes={[9, 10, 11, 12]} />
        <FiveDots indexes={[13, 14, 15, 16, 17]} />
        <FourDots indexes={[18, 19, 20, 21]} />
        <FourDots indexes={[22, 23, 24, 25]} />
        <FourDots indexes={[26, 27, 28, 29]} />
        <FourDots indexes={[30, 31, 32, 33]} />
        <FourDots indexes={[34, 35, 36, 37]} />
        <FourDots indexes={[38, 39, 40, 41]} />
        <FourDots indexes={[42, 43, 44, 45]} />
        <FourDots indexes={[46, 47, 48, 49]} />
        <FourDots indexes={[50, 51, 52, 53]} />
        <FourDots indexes={[54, 55, 56, 57]} />
        <FourDots indexes={[58, 59, 60, 61]} />
        <FourDots indexes={[62, 63, 64, 65]} />
        <FourDots indexes={[66, 67, 68, 69]} />
        <FourDots highlight={highlight} indexes={[70, 71, 72, 73]} />
        <FourDots indexes={[74, 75, 76, 77]} />
        <FourDots indexes={[78, 79, 80, 81]} />
        <FourDots indexes={[82, 83, 84, 85]} />
        <FourDots indexes={[86, 87, 88, 89]} />
        <FourDots indexes={[90, 91, 92, 93]} />
        <FourDots indexes={[94, 95, 96, 97]} />
        <FourDots indexes={[98, 99, 100, 101]} />
        <FourDots indexes={[102, 103, 104, 105]} />
        <FourDots indexes={[106, 107, 108, 109]} />
        <FourDots indexes={[110, 111, 112, 113]} />
        <ThreeDots indexes={[114, 115, 116]} />
        <FourDots indexes={[117, 118, 119, 120]} />
        <FourDots indexes={[121, 122, 123, 124]} />
        <ThreeDots indexes={[125, 126, 127]} />
      </Grid>
      <ColorScale />
    </HStack>
  );
};

export default DeviceConfig;
