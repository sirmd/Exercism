
const replaceAt = (string, index, replacement) =>
  string.substring(0, index)
  + replacement
  + string.substring(index + replacement.length);

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const rows = (letter) => {
  var result = [];
  var len = ALPHABET.indexOf(letter);

  // This for loop will generate only the first half of the diamond
  for (let r = 0; r <= len; r++) {

    // Create a string with empty spaces with the maximum length of the diamond
    var line = " ".repeat(len * 2 + 1);

    // For each index replace an empty space with the current letter
    // When r = 0 it will replace twice in the same index, no problem.
    [len - r, len + r]
      .forEach(pos => { line = replaceAt(line, pos, ALPHABET.substring(r, r + 1)) });
    
    // Push the line generated to the result array
    result.push(line);

  }

  // The return will concat the array generated inside the for loop
  // with an equal array but reversed and sliced in the first position
  return result.concat(Array.from(result).reverse().slice(1));
};


