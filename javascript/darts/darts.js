const INNER_RADIUS = 1;
const MIDDLE_RADIUS = 5;
const OUTER_RADIUS = 10;
const diagonalFromCenter = (x, y) => Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
const points = [
  {
    hit: (diagonal) => diagonal > OUTER_RADIUS,
    point: () => 0
  },
  {
    hit: (diagonal) => diagonal > MIDDLE_RADIUS && diagonal <= OUTER_RADIUS,
    point: () => 1
  },
  {
    hit: (diagonal) => diagonal > INNER_RADIUS && diagonal <= MIDDLE_RADIUS,
    point: () => 5
  },
  {
    hit: (diagonal) => diagonal <= INNER_RADIUS,
    point: () => 10
  },
]
export const score = (x, y) =>
  points
    .find(({ hit }) => hit(diagonalFromCenter(x, y)))
    .point();
