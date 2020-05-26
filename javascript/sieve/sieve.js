
export const primes = (n) => {
  const MARKED = new Set();
  const NUMBERS = new Set();
  const PRIMES = new Set();
  for (let index = 2; index < n + 1; index++) NUMBERS.add(index);

  for (let prime of NUMBERS) {
    const iterator = prime;
    if (!MARKED.has(prime)) PRIMES.add(prime);
    
    while ((prime + iterator) <= Math.max(...[...NUMBERS])) {

      if (!MARKED.has(prime + iterator)) {

        MARKED.add(prime + iterator);

      }
      prime += iterator;
    }

  }
  return [...PRIMES];

};
