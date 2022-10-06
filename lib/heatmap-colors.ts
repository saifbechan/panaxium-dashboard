const heatMapColorforValue = (value: number) => `hsl(${(1.0 - value) * 240}, 100%, 50%)`;

export default heatMapColorforValue;
