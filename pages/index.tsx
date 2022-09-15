import { GAP } from '../lib/constants';
import { Grid, GridItem } from '@chakra-ui/react';
import { profileOpenState } from '../lib/store';
import { useAtomValue } from 'jotai';
import Handle from '../components/Profile/handle';
import PSDMeasurement from '../components/PSDmeasurement';
import Profile from '../components/Profile';
import RythmMeasurement from '../components/RythmMeasurement';
import dynamic from 'next/dynamic';
import rawSignals from '../lib/raw-signals';
import type { NextPage } from 'next';

const RawSignalsNoSSR = dynamic(() => import('../components/RawSignal'), { ssr: false });
const RawSignalsCombinedNoSSR = dynamic(() => import('../components/RawSignalsCombined'), {
  ssr: false,
});

const Home: NextPage = () => {
  const profileOpen = useAtomValue(profileOpenState);

  return (
    <Grid
      gap={GAP}
      templateColumns={{
        base: '1fr',
        md: profileOpen ? '300px auto' : '75px auto',
      }}
    >
      <GridItem transition="all 1s">{profileOpen ? <Profile /> : <Handle />}</GridItem>
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

          {rawSignals.map((datasets, signal) => (
            <RawSignalsNoSSR key={signal + 1} datasets={[datasets]} signal={signal + 1} />
          ))}
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Home;
