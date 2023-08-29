const capitalize = (str: string): string =>
  str
    .split(' ')
    .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1))
    .join(' ');

const formatPrice = (price: number): string =>
  Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0})
    .format(price)
    .replace(/\$/, '');

export {capitalize, formatPrice};
