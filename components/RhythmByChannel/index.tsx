import { Box, Collapse, Select, Spacer } from '@chakra-ui/react';
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

  const chartRef = useRef<ChartJSOrUndefined<'line', number[], unknown>>();
  const labels = ['Delta', 'Theta', 'Alpha', 'Beta', 'Gamma'];

  const pointer = useRef(0);

  useEffect(() => {
    if (ticks % 5 !== 0) return;

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
        style={{ gridColumn: 'span 6' }}
      >
        <Section border="1px solid #401D56" id="rhythm_channel" title="Rhythm by channel">
          <Select
            backgroundColor="#401D56"
            border="1px solid gray"
            borderRadius={2}
            fontWeight="normal"
            size="xs"
            variant="outlined"
          >
            {[...Array(128)].map((_item, index) => (
              <option key={index}>Channel {index + 1}</option>
            ))}
          </Select>

          <Spacer h={5} />

          <Box margin="0 0 -10px -10px">
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
                  datalabels: { color: 'silver' },
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
