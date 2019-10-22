const analyze = array => {
  const sum = array.reduce((add, number) => add + number);
  const { length } = array;
  const min = Math.min(...array);
  const max = Math.max(...array);
  return {
    average: (sum / length),
    min,
    max,
    length,
  };
};

export default analyze;
