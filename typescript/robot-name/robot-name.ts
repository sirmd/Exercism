const releasedNames = new Set();

const generateName = () => {
  const generateRandomDigit = () => Math.floor(Math.random() * 9);
  const generateRandomChar = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVXYWZ";
    const index = Math.floor(Math.random() * (alphabet.length - 1));
    return alphabet[index];
  }
  const generateRandomName = () => {
    return generateRandomChar() +
      generateRandomChar() +
      generateRandomDigit() +
      generateRandomDigit() +
      generateRandomDigit();
  }
  let newName;

  do {
    newName = generateRandomName();
  } while (releasedNames.has(newName));

  releasedNames.add(newName);

  return newName;
}

export default class Robot {
  public name = generateName();

  public resetName(): void {
    this.name = generateName();
  }

  public static releaseNames(): void {
    releasedNames.clear();
  }
}
