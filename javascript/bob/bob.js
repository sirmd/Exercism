const stringHaveLetters = (message) => message.replace(/[A-Za-z]\B/) != message;
const isQuestion = (message) => message.substring(message.length - 1) == '?';
const isYelling = (message) => message.toUpperCase() == message;
const isEmpty = (message) => message.length == 0;

const answers = [
  {
    rule: ({message}) => isEmpty(message),
    answer: () => 'Fine. Be that way!'
  },
  {
    rule: ({message}) => isYelling(message) && isQuestion(message) && stringHaveLetters(message),
    answer: () => 'Calm down, I know what I\'m doing!'
  },
  {
    rule: ({message}) => isYelling(message) && stringHaveLetters(message),
    answer: () => 'Whoa, chill out!'
  },
  {
    rule: ({message}) => isQuestion(message),
    answer: () => 'Sure.'
  },
  {
    rule: () => true,
    answer: () => 'Whatever.'
  }
]
export const hey = (message) => {
  message = message.trim().replace(/\r?\n|\r|\t/g);
  return answers.find(({rule}) => rule({message})).answer();
};

