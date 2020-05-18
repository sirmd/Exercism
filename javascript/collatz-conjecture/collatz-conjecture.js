export const steps = (n) => {
  if (n == 1) return 0;
  if (n <= 0) throw (new Error("Only positive numbers are allowed"));

  var steps = 0;
  while (n > 1) {
    n = (n % 2 === 1) ? 3 * n + 1 : n / 2;
    steps++;
  }

  return steps;
};
