import { Box, Flex, Grid, Text, VStack } from '@chakra-ui/react';
import heatMapColorforValue from '../../lib/heatmap-colors';

const ColorScale = () => {
  return (
    <Grid gap={1} templateColumns="1fr 1fr">
      <VStack p="5px 0 5px 0" spacing={0}>
        {[...new Array(101)].map((_item, index) => {
          if (index % 2 !== 0) return;

          return (
            <Box
              key={index}
              backgroundColor={heatMapColorforValue((100 - index) / 100)}
              h={1}
              opacity="0.75"
              w={2}
            />
          );
        })}
      </VStack>
      <Flex flexDir="column" justifyContent="space-between">
        {[...new Array(101)].map((_item, index) => {
          if (index % 20 !== 0) return;

          return (
            <Box key={index} textAlign="left">
              <Text fontSize="xs">{parseFloat(`${(100 - index) / 100}`).toFixed(1)}</Text>
            </Box>
          );
        })}
      </Flex>
    </Grid>
  );
};

export default ColorScale;
