export const addZero = (number: number, repeat = 1): string => {
  if (repeat < 1) return `${number}`;
  const numberofZero: number = number > 9 ? repeat - 1 : repeat;
  const prefix: string = '0'.repeat(numberofZero);
  return `${prefix}${number}`;
};

export const formatCurrency = (
  number: number,
  currency: string = 'USD'
): string => {
  const numberFormatOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency,
  };
  return new Intl.NumberFormat('en-US', numberFormatOptions).format(number);
};

export const formatNumber = (x: number = 0) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const isNumeric = (str: string) => {
  if (typeof str != 'string') return false;
  return !Number.isNaN(str) && !Number.isNaN(parseFloat(str));
};

export const randomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
