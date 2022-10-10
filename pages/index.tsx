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
import {
  SectionToggleIds,
  displaySignalsState,
  profileOpenState,
  sectionTogglesState,
} from '../lib/store';
import { useAtomValue } from 'jotai';
import AllSignals from '../containers/all-signals';
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
  const displaySignals = useAtomValue(displaySignalsState);
  const sectionToggles = useAtomValue(sectionTogglesState);

  const areTrue: string[] = [];
  Object.keys(sectionToggles).forEach((key) => {
    if (sectionToggles[key as keyof SectionToggleIds]) {
      areTrue.push(key);
    }
  });

  return (
    <Grid
      gap={GAP}
      templateColumns={{
        base: '1fr',
        md: profileOpen ? '250px auto' : '75px auto',
      }}
    >
      <GridItem transition="all 1s">{profileOpen ? <Profile /> : <Handle />}</GridItem>

      {displaySignals ? (
        <RawSignals />
      ) : areTrue.length === 1 && areTrue[0] === 'rhythm_all' ? (
        <AllSignals />
      ) : (
        <Overview />
      )}
    </Grid>
  );
};

export default Home;
