const conversions = [
  {
    number: ({ n }) => n >= 1000,
    conversion: (n) => 'M'.repeat(Math.floor(n / 1000)),
    remainder: (n) => n - Math.floor(n / 1000) * 1000
  },
  {
    number: ({ n }) => n >= 900 && n < 1000,
    conversion: (n) => 'CM',
    remainder: (n) => n - 900
  },
  {
    number: ({ n }) => n >= 500,
    conversion: (n) => 'D'.repeat(Math.floor(n / 500)),
    remainder: (n) => n - Math.floor(n / 500) * 500
  },
  {
    number: ({ n }) => n >= 400 && n < 500,
    conversion: (n) => 'CD',
    remainder: (n) => n - 400
  },
  {
    number: ({ n }) => n >= 100,
    conversion: (n) => 'C'.repeat(Math.floor(n / 100)),
    remainder: (n) => n - Math.floor(n / 100) * 100
  },
  {
    number: ({ n }) => n >= 90 && n < 100,
    conversion: (n) => 'XC',
    remainder: (n) => n - 90
  },
  {
    number: ({ n }) => n >= 50,
    conversion: (n) => 'L'.repeat(Math.floor(n / 50)),
    remainder: (n) => n - Math.floor(n / 50) * 50
  },
  {
    number: ({ n }) => n >= 40 && n < 50,
    conversion: (n) => 'XL',
    remainder: (n) => n - 40
  },
  {
    number: ({ n }) => n >= 9,
    conversion: (n) =>
      'I'.repeat(n < 10 ? 10 - n : 0) +
      'X'.repeat(n < 10 ? 10 - n : Math.floor(n / 10)),
    remainder: (n) => n < 10 ? 0 : n - Math.floor(n / 10) * 10
  },
  {
    number: ({ n }) => n >= 4 && n <= 8,
    conversion: (n) => 'I'.repeat(n < 5 ? 5 - n : 0) + 'V',
    remainder: (n) => n < 5 ? 0 : n - Math.floor(n / 5) * 5
  },
  {
    number: ({ n }) => n >= 1 && n <= 3,
    conversion: (n) => 'I'.repeat(Math.floor(n / 1)),
    remainder: (n) => 0
  },
]
export const toRoman = (n) => {
  var conversion = '';
  conversion += conversions.find(({ number }) => number({ n })).conversion(n);
  var remainder = conversions.find(({ number }) => number({ n })).remainder(n);
  if (remainder > 0) conversion += toRoman(remainder);

  return conversion;
};
