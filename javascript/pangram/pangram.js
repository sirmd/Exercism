//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string = "abcdefghijklmnopqrstuvwxyz") => {
  if (string == '') return false;
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  string.split('').forEach(element => {
    if (alphabet.includes(element.toLowerCase())) alphabet.splice(alphabet.indexOf(element.toLowerCase()), 1);
  });

  return alphabet.length == 0;
};



