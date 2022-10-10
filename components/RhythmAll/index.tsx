import { Box, Collapse } from '@chakra-ui/react';
import { Chart } from 'react-chartjs-2';
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types';
import { ScatterDataPoint } from 'chart.js';
import { sectionTogglesState, ticksState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import { useEffect, useMemo, useRef } from 'react';
import Section from '../Section';
import lfpSignals250 from '../../data/lfp-signals-250';
import lfpSignalsAVG from '../../data/lfp-signals-avg';
import minmax from '../../data/min-max-250';

const RhythmAll = () => {
  const sectionToggles = useAtomValue(sectionTogglesState);
  const ticks = useAtomValue(ticksState);

  const chartRef = useRef<ChartJSOrUndefined<'line', ScatterDataPoint[], unknown>>();
  const counterRef = useRef(-1);

  const MAX_LENGTH = lfpSignals250[0].length;

  useEffect(() => {
    if (!chartRef.current) return;

    if (counterRef.current === MAX_LENGTH - 1) {
      counterRef.current = 0;
    } else {
      counterRef.current += 1;
    }

    chartRef.current.data.datasets.forEach((dataset, index) => {
      if (index === 0) {
        dataset.data.push({ x: 0, y: lfpSignalsAVG[counterRef.current] });
      } else {
        dataset.data.push({ x: 0, y: lfpSignals250[index - 1][counterRef.current] });
      }

      dataset.data.map((value) => ({
        x: ((value as ScatterDataPoint).x -= 1),
        y: (value as ScatterDataPoint).y,
      }));

      dataset.data.shift();
    });

    chartRef.current.update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticks]);

  return (
    <Collapse animateOpacity in={sectionToggles['rhythm_all']} style={{ gridColumn: 'span 6' }}>
      <Section border="1px solid #401D56" id="rhythm_all" title="All Signals">
        <Box margin="0 -5px 0 -5px">
          {useMemo(
            () => (
              <Chart
                ref={chartRef}
                data={{
                  labels: Array.from(Array(MAX_LENGTH).keys())
                    .map((value) => value * -1)
                    .reverse(),
                  datasets: [
                    {
                      borderColor: '#48438C',
                      borderWidth: 3,
                      data: lfpSignalsAVG.map((y, index) => ({ x: index - MAX_LENGTH + 1, y })),
                      pointRadius: 0,
                    },
                  ].concat(
                    [...new Array(128)].map((_, index) => ({
                      borderColor: '#61586F',
                      borderWidth: 0.5,
                      data: lfpSignals250[index].map((y, index) => ({
                        x: index - MAX_LENGTH + 1,
                        y,
                      })),
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
                      max: -1,
                      min: -40,
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
            ),
            // eslint-disable-next-line react-hooks/exhaustive-deps
            []
          )}
        </Box>
      </Section>
    </Collapse>
  );
};

export default RhythmAll;
