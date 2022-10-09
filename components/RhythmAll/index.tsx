import 'chartjs-adapter-luxon';
import { Box, Collapse } from '@chakra-ui/react';
import { BubbleDataPoint, ChartDataset, ScatterDataPoint } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types';
import { sectionTogglesState, signalsMinMaxState, ticksState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import { useEffect, useMemo, useRef } from 'react';
import Section from '../Section';
import lfpSegment from '../../data/lfp-segment';

const RhythmAll = ({
  datasets,
}: {
  datasets: ChartDataset<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[]>[];
}) => {
  const ticks = useAtomValue(ticksState);

  const chartRef =
    useRef<
      ChartJSOrUndefined<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[], unknown>
    >();
  const sectionToggles = useAtomValue(sectionTogglesState);
  const minMaxAll = useAtomValue(signalsMinMaxState);

  const counterRef = useRef(0);
  const avgRef = useRef(0);

  const MAX_LENGTH = 100;

  useEffect(() => {
    if (chartRef.current === null || chartRef.current === undefined) return;

    chartRef.current.data.datasets.forEach((dataset, index) => {
      if (counterRef.current < lfpSegment[0].length - 1) {
        counterRef.current += 1;
      } else {
        counterRef.current = 0;
      }

      dataset.data.map((value) => ({
        x: ((value as ScatterDataPoint).x -= 1),
        y: (value as ScatterDataPoint).y,
      }));

      if (typeof lfpSegment[index] !== 'undefined') {
        dataset.data.push({ x: 0, y: lfpSegment[index][counterRef.current] });
        avgRef.current += lfpSegment[index][counterRef.current];
      } else {
        dataset.data.push({ x: 0, y: avgRef.current / lfpSegment[index - 1].length });
        avgRef.current = 0;
      }

      if (dataset.data.length === MAX_LENGTH) {
        dataset.data.shift();
      }
    });

    chartRef.current.update();
  }, [ticks]);

  return useMemo(
    () => (
      <Collapse animateOpacity in={sectionToggles['rhythm_all']} style={{ gridColumn: 'span 6' }}>
        <Section border="1px solid #401D56" info="Some extra information" title="All Signals">
          <Box margin="0 -5px 0 -5px">
            <Chart
              ref={chartRef}
              data={{
                labels: Array.from(Array(MAX_LENGTH).keys())
                  .map((value) => value * -1)
                  .reverse(),
                datasets,
              }}
              options={{
                plugins: {
                  legend: { display: false },
                  datalabels: { display: false },
                },
                layout: {
                  padding: 0,
                },
                scales: {
                  x: {
                    display: false,
                    min: -59,
                    max: 0,
                  },
                  y: {
                    display: false,
                    min: minMaxAll.sum.min,
                    max: minMaxAll.sum.max,
                  },
                },
              }}
              type="line"
            />
          </Box>
        </Section>
      </Collapse>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sectionToggles['rhythm_all']]
  );
};

export default RhythmAll;
