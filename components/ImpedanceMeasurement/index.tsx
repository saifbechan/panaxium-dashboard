import {
  BubbleController,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { selectedSignalState } from '../../lib/store';
import { useAtomValue } from 'jotai';
import { useEffect, useMemo, useRef } from 'react';
import React from 'react';
import Section from '../Section';

ChartJS.register(LinearScale, PointElement, BubbleController, Tooltip, Legend);

const ImpedanceMeasurement = () => {
  const chartRef = useRef<ChartJS>(null);
  const selectedSignal = useAtomValue(selectedSignalState);

  useEffect(() => {
    chartRef.current?.data.datasets.forEach((dataset, index) => {
      dataset.backgroundColor = index === selectedSignal ? '#59486A' : 'rgba(255, 255, 255, 0.5)';
    });
    chartRef.current?.update();
  }, [selectedSignal]);

  return useMemo(
    () => (
      <Section info="Some extra information" title="Impedance measurement">
        <Chart
          ref={chartRef}
          data={{
            datasets: Array.from({ length: 16 }, (_, index) => ({
              data: [
                {
                  x: faker.datatype.number({ min: 0, max: 10 }),
                  y: faker.datatype.number({ min: 0, max: 10 }),
                  r: faker.datatype.number({ min: 5, max: 20 }),
                },
              ],
              backgroundColor: index === selectedSignal ? '#59486A' : 'rgba(255, 255, 255, 0.5)',
            })),
          }}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                display: false,
              },
              x: {
                display: false,
              },
            },
            plugins: {
              legend: { display: false },
            },
          }}
          type="bubble"
        />
      </Section>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};

export default ImpedanceMeasurement;
