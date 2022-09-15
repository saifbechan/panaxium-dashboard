import 'chartjs-adapter-luxon';
import {
  BubbleDataPoint,
  CategoryScale,
  ChartDataset,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  ScatterDataPoint,
  Title,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Collapse } from '@chakra-ui/react';
import { displaySignalsState } from '../../lib/store';
import { faker } from '@faker-js/faker';
import { useAtomValue } from 'jotai';
import { useMemo, useRef } from 'react';
import Section from '../Section';
import StreamingPlugin from 'chartjs-plugin-streaming';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(
  StreamingPlugin,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const RawSignalsCombined = ({
  datasets,
}: {
  datasets: ChartDataset<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[]>[];
}) => {
  const isOn = useAtomValue(displaySignalsState);
  const chartRef = useRef<ChartJS>(null);

  return (
    <Collapse animateOpacity in={!isOn}>
      <Section border="1px solid #401D56" info="Some extra information" title={`Raw Signals`}>
        {useMemo(
          () => (
            <Chart
              ref={chartRef}
              data={{
                datasets,
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  datalabels: { display: false },
                },
                scales: {
                  x: {
                    display: false,
                    type: 'realtime',
                    realtime: {
                      delay: 2000,
                      onRefresh: (chart: ChartJS) => {
                        chart.data.datasets.forEach((dataset) => {
                          const next = {
                            x: Date.now(),
                            y: faker.datatype.float({ min: 0, max: 1 }),
                          };
                          dataset.data.push(next);
                        });
                      },
                    },
                  },
                  y: {
                    display: false,
                  },
                },
              }}
              type="line"
            />
          ),
          // eslint-disable-next-line react-hooks/exhaustive-deps
          []
        )}
      </Section>
    </Collapse>
  );
};

export default RawSignalsCombined;
