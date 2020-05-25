
export const isArmstrongNumber = (n = '') => 
   n == n.toString()
    .split('')
    .map((x) => Math.pow(parseInt(x), n.toString().length))
    .reduce((acc, n) => (acc += n));
;
