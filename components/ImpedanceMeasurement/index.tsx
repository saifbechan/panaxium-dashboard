import {
  ActiveElement,
  BubbleController,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { selectedSignalState } from '../../lib/store';
import { useAtom } from 'jotai';
import { useEffect, useMemo, useRef } from 'react';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import React from 'react';
import Section from '../Section';
import impedenceData from '../../lib/impedance-data';

ChartJS.register(LinearScale, PointElement, BubbleController, Tooltip, Legend, ChartDataLabels);

const ImpedanceMeasurement = () => {
  const chartRef = useRef<ChartJS>(null);
  const [selectedSignal, setSelectedSignal] = useAtom(selectedSignalState);

  useEffect(() => {
    chartRef.current?.data.datasets.forEach((dataset, index) => {
      dataset.backgroundColor = index === selectedSignal ? '#59486A' : 'rgba(255, 255, 255, 0.5)';
    });
    chartRef.current?.update();
  }, [selectedSignal]);

  return (
    <Section info="Some extra information" title="Impedance measurement">
      {useMemo(
        () => (
          <Chart
            ref={chartRef}
            data={{
              datasets: Array.from({ length: 16 }, (_, index) => ({
                data: [impedenceData[index]],
                backgroundColor: index === selectedSignal ? '#59486A' : '#FFF',
                borderColor: 'rgba(45, 60, 115, 1)',
                borderWidth: 3,
                label: `${index + 1}`,
              })),
            }}
            options={{
              maintainAspectRatio: false,
              events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
              onClick: (_, elements: ActiveElement[]) => {
                setSelectedSignal(elements.pop()?.datasetIndex || 0);
              },
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
                datalabels: {
                  color: '#000',
                  font: {
                    weight: 'bold',
                  },
                  formatter: (_, context: Context) => context.dataset.label,
                },
              },
            }}
            type="bubble"
          />
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
      )}
    </Section>
  );
};

export default ImpedanceMeasurement;
