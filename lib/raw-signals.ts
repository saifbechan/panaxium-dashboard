import { BubbleDataPoint, ChartDataset, ScatterDataPoint } from 'chart.js';

const rawSignals: ChartDataset<'line', (number | ScatterDataPoint | BubbleDataPoint | null)[]>[] = [
  ...new Array(128),
].map(() => ({
  borderColor: '#61586F',
  borderWidth: 2,
  data: [],
  pointRadius: 0,
}));

export default rawSignals;
