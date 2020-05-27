const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

const generateRandomKey = () => {

  var count = 0;
  var key = '';
  do {
    var random = Math.floor((ALPHABET.length) * Math.random());
    key += ALPHABET.substring(random, random + 1);
    count = key.length;
  } while (count < 100);
  return key;
};

export class Cipher {
  constructor(key = generateRandomKey()) {
    this._key = key;
  }

  encode = (string = '') => this.encodeOrDecode('encode', string);

  decode = (string = '') => this.encodeOrDecode('decode', string);

  encodeOrDecode(operation, string) {
    var result = "";
    this._key = this._key.repeat(Math.ceil(string.length / this._key.length));

    for (let index = 0; index < string.split('').length; index++) {
      const element = string.split('')[index];
      var indexElementInAlphabet = ALPHABET.indexOf(element);
      var indexKeyElementInAlphabet = ALPHABET.indexOf(this._key.substring(index, index + 1));
      var indexNewElement =
        (ALPHABET.length +
          (operation == "encode" ?
          (indexElementInAlphabet + indexKeyElementInAlphabet) :
          (indexElementInAlphabet - indexKeyElementInAlphabet))
        ) % ALPHABET.length;
      result += ALPHABET.split('')[indexNewElement];
    }
    return result;
  }

  get key() {
    return this._key.toString();
  }
}
