const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const timestampToDate = (timestamp) => {
  const date = new Date(0);
  date.setUTCSeconds(parseInt(timestamp, 10));

  return `${date.getDate()} ${months[date.getMonth()]}, ${1900+date.getYear()}`;
};
