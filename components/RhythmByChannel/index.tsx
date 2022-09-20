import { BubbleDataPoint, ScatterDataPoint } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types';
import { Collapse, Select, Spacer } from '@chakra-ui/react';
import { sectionTogglesState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import { useEffect, useRef } from 'react';
import Section from '../Section';
import barplot from '../../data/barplot';

const RhythmByChannel = () => {
  const sectionToggles = useAtomValue(sectionTogglesState);
  const chartRef =
    useRef<
      ChartJSOrUndefined<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[], unknown>
    >();
  const labels = ['delta', 'theta', 'alpha', 'beta', 'gamma'];

  const timerRef = useRef<NodeJS.Timer>();

  const pointer = useRef(0);

  useEffect(() => {
    timerRef.current = setInterval(() => tick(), 1000);

    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tick = () => {
    if (chartRef.current === null || chartRef.current === undefined) return;

    chartRef.current.data.datasets.forEach((dataset) => {
      if (pointer.current < barplot[0].length) {
        pointer.current += 1;
      } else {
        pointer.current = 0;
      }

      for (let i = 0; i < dataset.data.length; i++) {
        dataset.data[i] = barplot[i][pointer.current];
      }
    });

    chartRef.current.update();
  };

  return (
    <Collapse animateOpacity in={sectionToggles['rhythm_channel']} style={{ gridColumn: 'span 2' }}>
      <Section border="1px solid #401D56" info="Some extra information" title="Rhythm by channel">
        <Select placeholder="Select channel" size="xs">
          {[...new Array(128)].map((_item, index) => (
            <option key={index} value="option3">
              Channel {index + 1}
            </option>
          ))}
        </Select>

        <Spacer h={10} />

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
            plugins: {
              legend: {
                display: false,
              },
              datalabels: { display: false },
            },
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
          }}
          type="bar"
        />
      </Section>
    </Collapse>
  );
};

export default RhythmByChannel;
