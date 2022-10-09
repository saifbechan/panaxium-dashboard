import { Chart } from 'react-chartjs-2';
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types';
import { ScatterDataPoint } from 'chart.js';
import { Text } from '@chakra-ui/react';
import { selectedSignalState, ticksState } from '../../lib/store';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useMemo, useRef } from 'react';
import Section from '../Section';
import lfpSignals from '../../data/lfp-signals-250';
import minmax from '../../lib/min-max-250';

const RawSignal = ({ signal }: { signal: number }) => {
  const ticks = useAtomValue(ticksState);
  const counterRef = useRef(0);
  const chartRef = useRef<ChartJSOrUndefined<'line', ScatterDataPoint[], unknown>>();
  const [selectedSignal, setSelectedSignal] = useAtom(selectedSignalState);

  const MAX_LENGTH = lfpSignals[0].length;

  useEffect(() => {
    if (chartRef.current === null || chartRef.current === undefined) return;

    chartRef.current.data.datasets.forEach((dataset, index) => {
      if (counterRef.current === MAX_LENGTH) {
        counterRef.current = 0;
      } else {
        counterRef.current += 1;
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
        border={`1px solid ${signal === selectedSignal ? '#11a16a' : '#401D56'}`}
        outline={`2px solid ${signal === selectedSignal ? '#11a16a' : '#19172C'}`}
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
            datasets: [
              {
                borderColor: '#61586F',
                borderWidth: 2,
                data: [],
                pointRadius: 0,
              },
            ],
          }}
          options={{
            animation: {
              duration: 0,
            },
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
                min: minmax.all[signal - 1].min,
                max: minmax.all[signal - 1].max,
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
