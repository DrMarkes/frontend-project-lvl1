import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const round = 3;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

const showRules = (rules) => {
  console.log(rules);
};

export default (rules, getQuestionAndAnswer) => {
  const userName = greeting();
  showRules(rules);

  for (let i = 0; i < round; i += 1) {
    const questionAndAnswer = getQuestionAndAnswer();
    const question = car(questionAndAnswer);
    const answer = cdr(questionAndAnswer);
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (!(userAnswer === answer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
