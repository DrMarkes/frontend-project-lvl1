import { cons, car, cdr } from '@hexlet/pairs';

export const rules = 'Find the greatest common divisor of given numbers.';

const sort = (num1, num2) => (num1 > num2 ? cons(num1, num2) : cons(num2, num1));

const getGCD = (pairsNumber) => {
  const divisible = car(pairsNumber);
  const divider = cdr(pairsNumber);
  const reminder = divisible % divider;
  if (divider === 0) {
    return divisible;
  }

  const pairs = cons(divider, reminder);

  return getGCD(pairs);
};

export const getQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;

  const question = `${num1} ${num2}`;
  const answer = getGCD(sort(num1, num2)).toString();

  return cons(question, answer);
};
