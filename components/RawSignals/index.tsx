import 'chartjs-adapter-luxon';
import { Box, Tooltip as CTooltip, Heading, Icon } from '@chakra-ui/react';
import { BsQuestionCircle } from 'react-icons/bs';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import StreamingPlugin from 'chartjs-plugin-streaming';

ChartJS.register(
  StreamingPlugin,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RawSignals = () => {
  return (
    <Box backgroundColor="#29293B" padding="10px">
      <Box textAlign="right">
        <CTooltip label="Some extra information" hasArrow>
          <span>
            <Icon as={BsQuestionCircle} color="text.dimmed" />
          </span>
        </CTooltip>
      </Box>

      <Heading fontWeight="normal" as="h4" size="sm" color="text.dimmed" padding="0 0 20px 0">
        Raw Signals
      </Heading>

      <Line
        data={{
          datasets: [
            {
              label: 'Dataset 1',
              backgroundColor: '#61586F',
              borderColor: '#59486A',
              cubicInterpolationMode: 'monotone',
              fill: true,
              data: [],
            },
            {
              label: 'Dataset 2',
              backgroundColor: '#472B5E',
              borderColor: '#401D56',
              cubicInterpolationMode: 'monotone',
              fill: true,
              data: [],
            },
          ],
        }}
        options={{
          scales: {
            x: {
              type: 'realtime',
              realtime: {
                delay: 2000,
                onRefresh: (chart) => {
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: Math.random(),
                    });
                  });
                },
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default RawSignals;
