export const getStartDate = (type = 'day', amount = 1) => {
  const d = new Date();
  switch (type) {
    case 'day':
      return Date.now() - 86400000 * amount;
    case 'week':
      return Date.now() - 604800000 * amount;
    case 'month':
      return d.setMonth(d.getMonth() - amount);
    default:
      return d.setFullYear(d.getFullYear() - amount);
  }
};
