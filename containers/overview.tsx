import { GAP } from '../lib/constants';
import { Grid, GridItem } from '@chakra-ui/react';
import PSDMeasurement from '../components/PSDmeasurement';
import RythmMeasurement from '../components/RythmMeasurement';
import dynamic from 'next/dynamic';
import rawSignals from '../lib/raw-signals';

const RawSignalsCombinedNoSSR = dynamic(() => import('../components/RawSignalsCombined'), {
  ssr: false,
});

const Overview = () => {
  return (
    <GridItem marginRight={{ base: 0, md: 6 }}>
      <Grid
        gap={GAP}
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, minmax(0, 1fr))',
        }}
      >
        <RawSignalsCombinedNoSSR
          datasets={rawSignals
            .concat([
              {
                borderColor: '#48438C',
                borderWidth: 5,
                cubicInterpolationMode: 'monotone',
                data: [],
                pointRadius: 0,
              },
            ])
            .reverse()}
        />

        <RythmMeasurement />

        <PSDMeasurement />
      </Grid>
    </GridItem>
  );
};

export default Overview;
