export const isIsogram = (word) => {
  var alphabetCount = ALPHABET.split('').reduce(function (map, obj) {
    // Split the word by the current alphabet letter
    var wordCount = word.toLowerCase().split(obj).length - 1

    // If the current alphabet letter appears more than once, map it
    if (wordCount > 1) map[obj] = wordCount;
    return map;
  }, {});

  return Object.keys(alphabetCount).length == 0;
};


const ALPHABET = "abcdefghijklmnopqrstuvwxyz";