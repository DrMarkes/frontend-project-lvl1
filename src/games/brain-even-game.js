import { cons } from '@hexlet/pairs';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export const getQuestionAndAnswer = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const answer = isEven(number);

  return cons(number, answer);
};
