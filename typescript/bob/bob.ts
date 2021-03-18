type Responses = Array<{
  matched(message: string): boolean;
  response: string;
}>;
const clearMessage = (message: string) => message.trim().replace(/\r?\n|\r|\t/g, "");

const stringHaveLetters = (message: string) => message.replace(/[A-Za-z]\B/, "") != message;

const isYelling = (message: string) => message.toUpperCase() === message && stringHaveLetters(message);

const isEmpty = (message: string) => message.length === 0;

const isQuestion = (message: string) => message[message.length - 1] === '?'

class Bob {
  private responses: Responses = [
    {
      matched: (message: string) => isYelling(message) && isQuestion(message),
      response: "Calm down, I know what I'm doing!",
    },
    {
      matched: (message: string) => isEmpty(message),
      response: "Fine. Be that way!",
    },
    {
      matched: (message: string) => isYelling(message),
      response: "Whoa, chill out!",
    },
    {
      matched: (message: string) => isQuestion(message),
      response: "Sure.",
    },
    {
      matched: () => true,
      response: "Whatever."
    }
  ]

  hey = (message: string) => (this.responses.find(({ matched }) => matched(clearMessage(message))))?.response;
}

export default Bob
