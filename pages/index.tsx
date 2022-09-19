import {
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
import { Grid, GridItem, VStack } from '@chakra-ui/react';
import { displaySignalsState, profileOpenState } from '../lib/store';
import { useAtomValue } from 'jotai';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Handle from '../components/Profile/handle';
import Overview from '../containers/overview';
import Profile from '../components/Profile';
import RawSignals from '../containers/raw-signals';
import SectionToggles from '../components/SectionToggles';
import StreamingPlugin from 'chartjs-plugin-streaming';
import type { NextPage } from 'next';

Chart.register(
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
  ChartDataLabels,
  StreamingPlugin
);

const Home: NextPage = () => {
  const profileOpen = useAtomValue(profileOpenState);
  const displaySignals = useAtomValue(displaySignalsState);

  return (
    <Grid
      gap={GAP}
      templateColumns={{
        base: '1fr',
        md: profileOpen ? '250px auto' : '75px auto',
      }}
    >
      <GridItem transition="all 1s">{profileOpen ? <Profile /> : <Handle />}</GridItem>

      <VStack gap={2}>
        <SectionToggles />

        {displaySignals ? <RawSignals /> : <Overview />}
      </VStack>
    </Grid>
  );
};

export default Home;
