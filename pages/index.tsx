import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { GAP } from '../lib/constants';
import { Grid, GridItem } from '@chakra-ui/react';
import { profileOpenState } from '../lib/store';
import { useAtomValue } from 'jotai';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Handle from '../components/Profile/handle';
import Overview from '../containers/overview';
import Profile from '../components/Profile';
import RawSignals from '../containers/raw-signals';
import type { NextPage } from 'next';

Chart.register(
  BarElement,
  BarController,
  BarElement,
  CategoryScale,
  Filler,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  ChartDataLabels
);

const Home: NextPage = () => {
  const profileOpen = useAtomValue(profileOpenState);

  return (
    <Grid
      gap={GAP}
      templateColumns={{
        base: '1fr',
        md: profileOpen ? '250px auto' : '75px auto',
      }}
    >
      <GridItem transition="all 1s">{profileOpen ? <Profile /> : <Handle />}</GridItem>

      <RawSignals />

      <Overview />
    </Grid>
  );
};

export default Home;
