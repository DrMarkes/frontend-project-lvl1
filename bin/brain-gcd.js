#! /usr/bin/env node
import start from '../src/index.js';
import { rules, getQuestionAndAnswer } from '../src/games/brain-gcd-game.js';

start(rules, getQuestionAndAnswer);
