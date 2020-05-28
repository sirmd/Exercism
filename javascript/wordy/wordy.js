import { isNumber } from "util";

const defaultOperations = ["plus", "minus", "divided", "multiplied"];

const validations = [
  {
    // Test if no numbers, no operations were informed
    rule: (params) => 
    (params.numbers.length == 0 && 
      params.operations.length == 0 && 
      params.wordyCheck == 0),
    response: () => { throw new Error("Syntax error") },
  },
  {
    // Numbers array must be 1 unit greater than operations array
    rule: (params) => (params.numbers.length - params.operations.length) != 1 && params.operations.length > 0,
    response: () => { throw new Error("Syntax error") },
  },
  {
    // Check if the numbers and operations are in the correct order
    rule: (params) => 
    (defaultOperations.includes(params.PrefixPostfixCheck[0]) ||
      defaultOperations.includes(params.PrefixPostfixCheck[params.PrefixPostfixCheck.length - 1])),
    response: () => { throw new Error("Syntax error") },
  },
  {
    // Check if the a valid operations was informed
    rule: (params) => (params.operations.length == 0 && params.wordyCheck > 0),
    response: () => { throw new Error('Unknown operation') },
  },
  {
    // Check if the entry is valid but no operations were given, only one number
    rule: (params) => 
      (params.operations.length == 0 && 
        params.wordyCheck == 0 && 
        params.numbers.length == 1),
    response: () => false,
  },
  {
    // If all validations passed, return true
    rule: (params) => true,
    response: () => true
  }
];

const extractOperation = (wordy) => {

  var result = 0;
  var operations = wordy.match(/[^0-9- ?]?(divided by|plus|multiplied by|minus)/g, '');
  var numbers = wordy.match(/[0-9-\(\)]+/g, '');

  var params = {
    numbers: numbers == null ? [] : numbers,
    operations: operations == null ? [] : operations,
    wordyCheck: wordy.replace(/[0-9-? ]?(What is)?/g, '').length,
    PrefixPostfixCheck: wordy.replace(/[?]?(What is)?(by)?/g, '').trim().split(' '),
    param: wordy
  };

  // Test the entry string before calculating
  var isValid = validations.find(({ rule }) => rule(params)).response();

  // If all validations are true but there is a number, return the number
  if (!isValid) return parseInt(numbers[0]);

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

export const answer = (wordy) => extractOperation(wordy);
