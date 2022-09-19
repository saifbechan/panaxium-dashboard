import { BubbleDataPoint, ChartDataset, ScatterDataPoint } from 'chart.js';

const rawSignalsExtra: ChartDataset<
  'line',
  (number | ScatterDataPoint | BubbleDataPoint | null)[]
>[] = [...new Array(128)].map(() => ({
  borderColor: '#61586F',
  borderWidth: 2,
  data: [],
  pointRadius: 0,
}));

// rawSignalsExtra.unshift({
//   borderColor: '#48438C',
//   borderWidth: 5,
//   data: [],
//   pointRadius: 0,
// });

export default rawSignalsExtra;
