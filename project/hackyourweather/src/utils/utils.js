export const getCelcius = (temperature) => {
  return ((temperature - 32) * (5 / 9)).toFixed(1);
};
