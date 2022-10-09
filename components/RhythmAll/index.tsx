import { Box, Collapse } from '@chakra-ui/react';
import { Chart } from 'react-chartjs-2';
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types';
import { ScatterDataPoint } from 'chart.js';
import { sectionTogglesState, ticksState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import { useEffect, useMemo, useRef } from 'react';
import Section from '../Section';
import lfpSignals from '../../data/lfp-signals-250';
import minmax from '../../lib/min-max-250';

const RhythmAll = () => {
  const ticks = useAtomValue(ticksState);
  const chartRef = useRef<ChartJSOrUndefined<'line', ScatterDataPoint[], unknown>>();
  const sectionToggles = useAtomValue(sectionTogglesState);

  const counterRef = useRef(0);
  const avgRef = useRef(0);

  const MAX_LENGTH = lfpSignals[0].length;

  useEffect(() => {
    if (chartRef.current === null || chartRef.current === undefined) return;

    chartRef.current.data.datasets.forEach((dataset, index) => {
      if (counterRef.current === MAX_LENGTH) {
        counterRef.current = 0;
      } else {
        counterRef.current += 1;
      }

      dataset.data.map((value) => ({
        x: ((value as ScatterDataPoint).x -= 1),
        y: (value as ScatterDataPoint).y,
      }));

      if (typeof lfpSignals[index] !== 'undefined') {
        dataset.data.push({ x: 0, y: lfpSignals[index][counterRef.current] });
        avgRef.current += lfpSignals[index][counterRef.current];
      } else {
        dataset.data.push({ x: 0, y: avgRef.current / lfpSignals[index - 1].length });
        avgRef.current = 0;
      }

      if (dataset.data.length === MAX_LENGTH) {
        dataset.data.shift();
      }
    });

    chartRef.current.update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                datasets: [
                  {
                    borderColor: '#48438C',
                    borderWidth: 2,
                    data: [],
                    pointRadius: 0,
                  },
                ].concat(
                  [...new Array(128)].map(() => ({
                    borderColor: '#61586F',
                    borderWidth: 0.5,
                    data: [],
                    pointRadius: 0,
                  }))
                ),
              }}
              options={{
                animation: {
                  duration: 0,
                },
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
                    min: -56,
                    max: 0,
                  },
                  y: {
                    display: false,
                    min: minmax.sum.min,
                    max: minmax.sum.max,
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
