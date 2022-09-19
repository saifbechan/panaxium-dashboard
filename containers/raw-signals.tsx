import { Grid, GridItem } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import rawSignals from '../lib/raw-signals';

const RawSignalsNoSSR = dynamic(() => import('../components/RawSignal'), { ssr: false });

const RawSignals = () => {
  return (
    <GridItem marginRight={{ base: 0, md: 6 }}>
      <Grid
        gap={1}
        templateColumns={{
          base: '1fr',
          md: 'repeat(12, minmax(0, 1fr))',
        }}
        templateRows={{
          base: '1fr',
          md: 'repeat(8, minmax(0, 1fr))',
        }}
      >
        {rawSignals.map((datasets, signal) => (
          <RawSignalsNoSSR key={signal + 1} datasets={[datasets]} signal={signal + 1} />
        ))}
      </Grid>
    </GridItem>
  );
};

export default RawSignals;
