export const sum = (numbers, limit) => {
  var result = new Set();
  for (let index = 1; index < limit; index++) {

    if ((numbers.map((n) => (index % n))).includes(0)) result.add(index);

  }
  return result.size == 0 ? 0 : [...result.keys()].reduce((acc, n) => acc += n);
};
