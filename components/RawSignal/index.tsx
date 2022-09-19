import 'chartjs-adapter-luxon';
import { BubbleDataPoint, ChartDataset, Chart as ChartJS, ScatterDataPoint } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Text } from '@chakra-ui/react';
import { selectedSignalState, signalsMinMaxState } from '../../lib/store';
import { useAtom, useAtomValue } from 'jotai';
import { useMemo, useRef } from 'react';
import Section from '../Section';

const RawSignal = ({
  datasets,
  signal,
  lfpSegment,
}: {
  datasets: ChartDataset<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[]>[];
  signal: number;
  lfpSegment: number[][];
}) => {
  const chartRef = useRef<ChartJS>(null);
  const [selectedSignal, setSelectedSignal] = useAtom(selectedSignalState);
  const { min, max } = useAtomValue(signalsMinMaxState);
  const pointer = useRef(0);

  return (
    <Section border={`1px solid ${signal === selectedSignal ? '#61586F' : '#401D56'}`} padding={1}>
      <Text fontSize="xs" mb={1}>
        {signal}
      </Text>
      {useMemo(
        () => (
          <Chart
            ref={chartRef}
            data={{
              datasets,
            }}
            options={{
              aspectRatio: 0.75,
              events: ['click'],
              onClick: () => {
                setSelectedSignal(signal);
              },
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
                    refresh: 20,
                    onRefresh: (chart: ChartJS) => {
                      chart.data.datasets.forEach((dataset) => {
                        const next = {
                          x: Date.now(),
                          y: lfpSegment[signal - 1][pointer.current],
                        };
                        dataset.data.push(next);
                      });

                      if (pointer.current === 500) {
                        pointer.current = 0;
                        return;
                      }

                      pointer.current += 1;
                    },
                  },
                },
                y: {
                  display: false,
                  min,
                  max,
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
  );
};

export default RawSignal;
