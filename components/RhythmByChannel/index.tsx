import { Box, Collapse, Select, Spacer } from '@chakra-ui/react';
import { BubbleDataPoint, ScatterDataPoint } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types';
import { sectionTogglesState, ticksState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import { useEffect, useMemo, useRef } from 'react';
import Section from '../Section';
import barplot from '../../data/barplot';

const RhythmByChannel = () => {
  const ticks = useAtomValue(ticksState);

  const sectionToggles = useAtomValue(sectionTogglesState);

  const chartRef =
    useRef<
      ChartJSOrUndefined<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[], unknown>
    >();
  const labels = ['Delta', 'Theta', 'Alpha', 'Beta', 'Gamma'];

  const pointer = useRef(0);

  useEffect(() => {
    if (chartRef.current === null || chartRef.current === undefined) return;

    chartRef.current.data.datasets.forEach((dataset) => {
      if (pointer.current < barplot[0].length - 1) {
        pointer.current += 1;
      } else {
        pointer.current = 0;
      }

      for (let i = 0; i < dataset.data.length; i++) {
        dataset.data[i] = barplot[i][pointer.current];
      }
    });

    chartRef.current.update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticks]);

  return useMemo(
    () => (
      <Collapse
        animateOpacity
        in={sectionToggles['rhythm_channel']}
        style={{ gridColumn: 'span 2' }}
      >
        <Section border="1px solid #401D56" info="Some extra information" title="Rhythm by channel">
          <Select borderColor="gray.400" color="gray.400" size="xs">
            {['HFO'].map((_item, index) => (
              <option key={index}>Channel {index + 1}</option>
            ))}
          </Select>

          <Spacer h={5} />

          <Box margin="0 -10px -10px -10px">
            <Chart
              ref={chartRef}
              data={{
                labels,
                datasets: [
                  {
                    data: [...barplot.map((values) => values[0])],
                    backgroundColor: ['#61586F', '#59486A', '#4F3A64', '#472B5E', '#401D56'],
                  },
                ],
              }}
              options={{
                aspectRatio: 2.5,
                plugins: {
                  legend: {
                    display: false,
                  },
                  datalabels: { display: false },
                },
                layout: {
                  padding: 0,
                },
                scales: {
                  y: {
                    title: {
                      text: 'dB',
                      display: true,
                    },
                    min: 0,
                    max: 30,
                  },
                  x: {
                    title: {
                      text: 'Frequency band',
                      display: true,
                    },
                  },
                },
              }}
              type="bar"
            />
          </Box>
        </Section>
      </Collapse>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sectionToggles['rhythm_channel']]
  );
};

export default RhythmByChannel;
