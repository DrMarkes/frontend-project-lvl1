#! /usr/bin/env node
import start from '../src/index.js';
import { rules, getQuestionAndAnswer } from '../src/games/brain-progression-game.js';

start(rules, getQuestionAndAnswer);
