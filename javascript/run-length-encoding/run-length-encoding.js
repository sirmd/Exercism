export const encode = (entry = '') => {
  var encoded = [];
  var count = 0;
  var characters = entry.split('');
  for (let index = 0; index < characters.length; index++) {
    var currentChar = characters[index];
    var nextChar = index == characters.length ? currentChar : characters[index + 1];
    if (currentChar !== nextChar) {
      encoded.push((count + 1) <= 1 ? currentChar : (count + 1).toString() + currentChar);
    }
    count = currentChar == nextChar ? count + 1 : count = 0;

  }

  return encoded.join('');

};

export const decode = (entry = '') => {
  var decoded = '';
  var times = "";
  for (let index = 0; index < entry.length; index++) {
    var currentChar = entry.substring(index, index + 1);

    if (parseInt(currentChar) >= 0 && parseInt(currentChar) <= 9) {
      times += currentChar;
    } else {
      decoded += currentChar.repeat(times == '' ? 1 : parseInt(times));
      times = '';
    }

  }
  return decoded;
};
