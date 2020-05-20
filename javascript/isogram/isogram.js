export const isIsogram = (word) => {
  var alphabetCount = ALPHABET.split('').reduce(function(map, obj) {
    var wordCount = word.split(obj).length - 1
    if (wordCount > 1 ) map[obj] = wordCount;
    return map;
  }, {});

  var result = Object.assign({}, 
    ...Object.entries(alphabetCount).filter(([key, value]) => value > 1).map(([key, value]) => ({[key]:value}))
    );

  return Object.keys(result).length == 0;
};


const ALPHABET = "abcdefghijklmnopqrstuvwxyz";