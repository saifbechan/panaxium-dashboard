import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, Legend, LinearScale, PointElement, Tooltip } from 'chart.js';
import { faker } from '@faker-js/faker';
import { useEffect, useMemo, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import React from 'react';
import Section from '../Section';
import selectedSignalState from '../../store/selected-signal-state';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const ImpedanceMeasurement = () => {
  const chartRef = useRef<ChartJS>(null);
  const selectedSignal = useRecoilValue(selectedSignalState);

  useEffect(() => {
    chartRef.current?.data.datasets.forEach((dataset, index) => {
      dataset.backgroundColor = index === selectedSignal ? '#59486A' : 'rgba(255, 255, 255, 0.5)';
    });
    chartRef.current?.update();
  }, [selectedSignal]);

  return useMemo(
    () => (
      <Section title="Impedance measurement" info="Some extra information">
        <Chart
          type="bubble"
          ref={chartRef}
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
        />
      </Section>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};

export default ImpedanceMeasurement;
