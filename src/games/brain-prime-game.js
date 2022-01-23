import { cons } from '@hexlet/pairs';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gcd = (divisible, divider) => {
  const reminder = divisible % divider;
  if (divider === 0) {
    return divisible;
  }

  return gcd(divider, reminder);
};

const mult = (a, b, m) => {
  if (b === 1) {
    return a;
  }

  if (b % 2 === 0) {
    const t = mult(a, b / 2, m);
    return (2 * t) % m;
  }

  return (mult(a, b - 1, m) + a) % m;
};

const pows = (a, b, m) => {
  if (b === 0) {
    return 1;
  }

  if (b % 2 === 0) {
    const t = pows(a, b / 2, m);
    return mult(t, t, m) % m;
  }
  return (mult(pows(a, b - 1, m), a, m)) % m;
};

const isPrime = (number) => {
  const CarmichaelNumbers = [561, 1105, 1729, 2465, 2821];

  if (number === 2) {
    return true;
  }

  if (CarmichaelNumbers.includes(number)) {
    return false;
  }

  for (let i = 0; i < 100; i += 1) {
    const a = (Math.floor(Math.random() * number * 10) % (number - 2)) + 2;
    if (gcd(a, number) !== 1) {
      return false;
    }

    if (pows(a, number - 1, number) !== 1) {
      return false;
    }
  }

  return true;
};

const maxNumber = 3500;

export const getQuestionAndAnswer = () => {
  const number = Math.floor(Math.random() * maxNumber) + 1;
  const question = number.toString();
  const answer = isPrime(number) ? 'yes' : 'no';

  return cons(question, answer);
};
