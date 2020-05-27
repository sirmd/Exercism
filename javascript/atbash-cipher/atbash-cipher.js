const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789"

const encodeOrDecode = (string) => string.split('').map((char) =>
  (ALPHABET.includes(char.toLowerCase()) ?
    ALPHABET.split('').reverse()[ALPHABET.indexOf(char.toLowerCase())] :
    (NUMBERS.split('').includes(char)) ? char : '')).join('');

export const encode = (string = '') => encodeOrDecode(string).replace(/(\w{5})/g, '$1 ').replace(/(^\s+|\s+$)/, '');
export const decode = (string = '') => encodeOrDecode(string).replace(' ', '');
