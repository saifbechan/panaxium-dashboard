import { GAP } from '../lib/constants';
import { Grid, GridItem } from '@chakra-ui/react';
import { displaySignalsState, profileOpenState } from '../lib/store';
import { useAtomValue } from 'jotai';
import Handle from '../components/Profile/handle';
import Overview from '../containers/overview';
import Profile from '../components/Profile';
import RawSignals from '../containers/raw-signals';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const profileOpen = useAtomValue(profileOpenState);
  const displaySignals = useAtomValue(displaySignalsState);

  return (
    <Grid
      gap={GAP}
      templateColumns={{
        base: '1fr',
        md: profileOpen ? '300px auto' : '75px auto',
      }}
    >
      <GridItem transition="all 1s">{profileOpen ? <Profile /> : <Handle />}</GridItem>

      {displaySignals ? <RawSignals /> : <Overview />}
    </Grid>
  );
};

export default Home;
