import index from '../index.js';
import getRandomNumber from '../utilities.js';

const getProgressionInArray = () => {
  const firstElement = getRandomNumber();
  const step = getRandomNumber(1, 9);
  const arr = [];
  let element = firstElement;
  for (let i = 1; i <= 10; i += 1) {
    arr.push(element);
    element += step;
  }

  return arr;
};

const startProgressionGame = () => {
  const rules = 'What number is missing in the progression?';
  const getQuestionAndAnswer = () => {
    const missingNumberIndex = getRandomNumber(0, 9);
    const array = getProgressionInArray();
    const correctAnswer = String(array[missingNumberIndex]);
    array[missingNumberIndex] = '..';
    const question = array.join(' ');
    
    return [question, correctAnswer];
  }

  index(rules, getQuestionAndAnswer);
};

export default startProgressionGame;
