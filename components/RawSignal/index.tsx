import 'chartjs-adapter-luxon';
import { BubbleDataPoint, ChartDataset, ScatterDataPoint } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types';
import { Text } from '@chakra-ui/react';
import { selectedSignalState, ticksState } from '../../lib/store';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useMemo, useRef } from 'react';
import Section from '../Section';
import lfpSignals from '../../data/lfp-signals-500';
import minmax500 from '../../lib/min-max-500';

const RawSignal = ({
  datasets,
  signal,
}: {
  datasets: ChartDataset<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[]>[];
  signal: number;
}) => {
  const ticks = useAtomValue(ticksState);

  const chartRef =
    useRef<
      ChartJSOrUndefined<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[], unknown>
    >();
  const [selectedSignal, setSelectedSignal] = useAtom(selectedSignalState);

  const counterRef = useRef(0);

  const MAX_LENGTH = 20;

  useEffect(() => {
    if (chartRef.current === null || chartRef.current === undefined) return;

    chartRef.current.data.datasets.forEach((dataset, index) => {
      if (counterRef.current < lfpSignals[0].length - 1) {
        counterRef.current += 1;
      } else {
        counterRef.current = 0;
      }

      if (dataset.data.length === MAX_LENGTH) {
        dataset.data.shift();
      }

      dataset.data.map((value) => ({
        x: ((value as ScatterDataPoint).x -= 1),
        y: (value as ScatterDataPoint).y,
      }));
      dataset.data.push({ x: 0, y: lfpSignals[index][counterRef.current] });
    });

    chartRef.current.update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticks]);

  return useMemo(
    () => (
      <Section
        border={`1px solid ${signal === selectedSignal ? '#61586F' : '#401D56'}`}
        padding={1}
      >
        <Text fontSize="xs" mb={1}>
          {signal}
        </Text>
        <Chart
          ref={chartRef}
          data={{
            labels: Array.from(Array(MAX_LENGTH).keys())
              .map((value) => value * -1)
              .reverse(),
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
              },
              y: {
                display: false,
                min: minmax500.all[signal - 1].min - 10,
                max: minmax500.all[signal - 1].max + 10,
              },
            },
          }}
          type="line"
        />
      </Section>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedSignal]
  );
};

export default RawSignal;
