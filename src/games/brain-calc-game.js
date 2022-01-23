import { cons } from '@hexlet/pairs';

export const rules = 'What is the result of the expression?';

const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;

const getRandomOperand = () => {
  const key = getRandomNumber(3);
  let operand;
  switch (key) {
    case 1:
      operand = '+';
      break;

    case 2:
      operand = '-';
      break;

    case 3:
      operand = '*';
      break;

    default:
      break;
  }

  return operand;
};

const getAnswer = (num1, num2, operand) => {
  let answer;
  switch (operand) {
    case '+':
      answer = num1 + num2;
      break;

    case '-':
      answer = num1 - num2;
      break;

    case '*':
      answer = num1 * num2;
      break;

    default:
      break;
  }

  return answer.toString();
};

const getQuestion = (num1, num2, operand) => `${num1} ${operand} ${num2}`;

export const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(100);
  const operand = getRandomOperand();
  let num2;
  if (operand === '*') {
    num2 = getRandomNumber(10);
  } else {
    num2 = getRandomNumber(100);
  }

  const question = getQuestion(num1, num2, operand);
  const answer = getAnswer(num1, num2, operand);

  return cons(question, answer);
};
