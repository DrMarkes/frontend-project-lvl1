import { cons } from '@hexlet/pairs';

export const rules = 'What number is missing in the progression?';

const minLength = 5;
const maxLength = 15;
const maxStep = 10;

const getProgression = () => {
  const progressionLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const progressionStep = Math.floor(Math.random() * maxStep) + 1;
  const firstMember = Math.floor(Math.random() * 100) + 1;
  const progression = [];

  let member = firstMember;

  for (let i = 0; i < progressionLength; i += 1) {
    member += progressionStep;
    progression.push(member);
  }

  return progression;
};

export const getQuestionAndAnswer = () => {
  const progression = getProgression();
  const randomMember = Math.floor(Math.random() * progression.length);

  const answer = progression[randomMember].toString();
  progression[randomMember] = '..';
  const question = progression.join(' ');

  return cons(question, answer);
};
