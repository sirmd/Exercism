//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (dnaSequence1 = '', dnaSequence2 = '') => {
  if (dnaSequence1.length == 0 && dnaSequence2.length > 0) throw 'left strand must not be empty';
  if (dnaSequence1.length > 0 && dnaSequence2.length == 0) throw 'right strand must not be empty';
  if (dnaSequence1.length != dnaSequence2.length) throw 'left and right strands must be of equal length';

  var distance = 0

  dnaSequence1.split('').forEach((item, index) => {
    if (dnaSequence2.split('')[index] != item) {
      distance++;
    };
  });

  return distance;
};
