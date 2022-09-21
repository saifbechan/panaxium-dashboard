import 'chartjs-adapter-luxon';
import { BubbleDataPoint, ChartDataset, ScatterDataPoint } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types';
import { Collapse } from '@chakra-ui/react';
import { sectionTogglesState, signalsMinMaxState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import { useEffect, useRef } from 'react';
import Section from '../Section';
import lfpSegment from '../../data/lfp-segment';

const RhythmAll = ({
  datasets,
}: {
  datasets: ChartDataset<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[]>[];
}) => {
  const chartRef =
    useRef<
      ChartJSOrUndefined<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[], unknown>
    >();
  const sectionToggles = useAtomValue(sectionTogglesState);
  const minMaxAll = useAtomValue(signalsMinMaxState);

  const timerRef = useRef<NodeJS.Timer>();

  const pointer = useRef(0);
  const countRef = useRef(0);

  useEffect(() => {
    timerRef.current = setInterval(() => tick(), 500);

    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tick = () => {
    if (chartRef.current === null || chartRef.current === undefined) return;

    chartRef.current.data.datasets.forEach((dataset, index) => {
      if (pointer.current < lfpSegment[0].length - 1) {
        pointer.current += 1;
      } else {
        pointer.current = 0;
      }
      dataset.data.push({ x: 0, y: lfpSegment[index][pointer.current] });

      dataset.data.map((value) => ({
        x: ((value as ScatterDataPoint).x -= 1),
        y: (value as ScatterDataPoint).y,
      }));
    });

    countRef.current += 1;

    chartRef.current.update();
  };

  return (
    <Collapse animateOpacity in={sectionToggles['rhythm_all']} style={{ gridColumn: 'span 2' }}>
      <Section border="1px solid #401D56" info="Some extra information" title="Rhythm (all)">
        <Chart
          ref={chartRef}
          data={{
            labels: Array.from(Array(100).keys())
              .map((value) => value * -1)
              .reverse(),
            datasets,
          }}
          options={{
            plugins: {
              legend: { display: false },
              datalabels: { display: false },
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
      </Section>
    </Collapse>
  );
};

export default RhythmAll;
