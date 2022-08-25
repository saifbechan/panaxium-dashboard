import { BubbleDataPoint, ChartDataset, ScatterDataPoint } from 'chart.js';

const rawSignals: ChartDataset<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[]>[] = [
  {
    backgroundColor: '#61586F',
    borderColor: '#61586F',
    cubicInterpolationMode: 'monotone',
    data: [],
    pointRadius: 0,
  },
  {
    backgroundColor: '#472B5E',
    borderColor: '#59486A',
    cubicInterpolationMode: 'monotone',
    data: [],
    pointRadius: 0,
  },
];

export default rawSignals;
