import { isNumber } from "util";

const extractOperation = (wordy) => {

  var result = 0;
  var operations = wordy.match(/[^0-9- ?]?(divided by|plus|multiplied by|minus)/g, '');
  var numbers = wordy.match(/[0-9-\(\)]+/g, '');
  var errorCheck = wordy.replace(/[0-9-? ]?(What is)?/g, '').length;

  if (operations == null && numbers == null && errorCheck == 0)
    throw new Error('Syntax error');

  if (errorCheck == 0 && numbers.length == 1 && operations == null)
    return parseInt(numbers[0]);

  if (operations == null && errorCheck > 0)
    throw new Error('Unknown operation');

  if ((numbers.length - operations.length) != 1 && operations.length > 0)
    throw new Error("Syntax error");

  var checkPrefixPostfix = wordy.replace(/[?]?(What is)?(by)?/g, '').trim().split(' ');
  if (["plus", "minus", "divided", "multiplied"].includes(checkPrefixPostfix[0]) ||
    ["plus", "minus", "divided", "multiplied"].includes(checkPrefixPostfix[checkPrefixPostfix.length - 1]))
    throw new Error("Syntax error");


  result = parseInt(numbers[0]);
  for (let c = 0; c < operations.length; c++) {

    switch (operations[c]) {

      case 'plus':
        if (isNumber(parseInt(numbers[c])) && isNumber(parseInt(numbers[c + 1])))
          result += parseInt(numbers[c + 1]);
        else throw new Error("Syntax error");
        break;

      case 'minus':
        if (isNumber(parseInt(numbers[c])) && isNumber(parseInt(numbers[c + 1])))
          result -= parseInt(numbers[c + 1]);
        else throw new Error("Syntax error");
        break;

      case 'divided by':
        if (isNumber(parseInt(numbers[c])) && isNumber(parseInt(numbers[c + 1])))
          result /= parseInt(numbers[c + 1]);
        else throw new Error("Syntax error");
        break;

      case 'multiplied by':
        if (isNumber(parseInt(numbers[c])) && isNumber(parseInt(numbers[c + 1])))
          result *= parseInt(numbers[c + 1]);
        else throw new Error("Syntax error");
        break;

      default:
        throw new Error("Unknown operation");
    }

  }

  return result;

}

export const answer = (wordy) => {

  var result = extractOperation(wordy);
  return result;
};
