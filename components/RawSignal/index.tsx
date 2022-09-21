import 'chartjs-adapter-luxon';
import { BubbleDataPoint, ChartDataset, ScatterDataPoint } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types';
import { Text } from '@chakra-ui/react';
import { selectedSignalState, signalsMinMaxState } from '../../lib/store';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useRef } from 'react';
import Section from '../Section';
import lfpSegment from '../../data/lfp-segment';

const RawSignal = ({
  datasets,
  signal,
}: {
  datasets: ChartDataset<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[]>[];
  signal: number;
}) => {
  const chartRef =
    useRef<
      ChartJSOrUndefined<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[], unknown>
    >();
  const minMaxAll = useAtomValue(signalsMinMaxState);
  const [selectedSignal, setSelectedSignal] = useAtom(selectedSignalState);

  const timerRef = useRef<NodeJS.Timer>();
  const counterRef = useRef(0);

  const MAX_LENGTH = 20;

  useEffect(() => {
    timerRef.current = setInterval(() => tick(), 500);

    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tick = () => {
    if (chartRef.current === null || chartRef.current === undefined) return;

    chartRef.current.data.datasets.forEach((dataset, index) => {
      if (counterRef.current < lfpSegment[0].length - 1) {
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
      dataset.data.push({ x: 0, y: lfpSegment[index][counterRef.current] });
    });

    chartRef.current.update();
  };

  return (
    <Section border={`1px solid ${signal === selectedSignal ? '#61586F' : '#401D56'}`} padding={1}>
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
              min: minMaxAll.all[signal - 1].min - 10,
              max: minMaxAll.all[signal - 1].max + 10,
            },
          },
        }}
        type="line"
      />
    </Section>
  );
};

export default RawSignal;
