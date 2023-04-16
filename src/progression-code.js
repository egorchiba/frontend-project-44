import index from './index.js';

const getProgressionInArray = () => {
  const firstElement = Math.floor(Math.random() * 99 + 1);
  const step = Math.floor(Math.random() * 9);
  const arr = [];
  let element = firstElement;
  for (let i = 1; i <= 10; i += 1) {
    arr.push(element);
    element += step;
  }

  return arr;
};

const progression = () => {
  const rules = 'What number is missing in the progression?';
  const expressionsAndAnswers = [[], [], []];

  for (let i = 0; i <= 2; i += 1) {
    const missingNumerIndex = Math.floor(Math.random() * 9);
    const array = getProgressionInArray();
    const correctAnswer = String(array[missingNumerIndex]);
    array[missingNumerIndex] = '..';
    const expression = array.join(' ');
    expressionsAndAnswers[i].push(expression);
    expressionsAndAnswers[i].push(correctAnswer);
  }

  index(rules, expressionsAndAnswers);
};

export default progression;
