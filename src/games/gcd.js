import index from '../index.js';
import getRandomNumber from '../utilities.js';

const getGcd = (firstNumber, secondNumber) => {
  const maxNumber = Math.max(firstNumber, secondNumber);
  const minNumber = Math.min(firstNumber, secondNumber);

  if (maxNumber % minNumber === 0) {
    return minNumber;
  }
  const halfOfMinNumber = Math.floor(minNumber / 2);
  for (let i = halfOfMinNumber; i > 1; i -= 1) {
    if (maxNumber % i === 0 && minNumber % i === 0) {
      return i;
    }
  }
  return 1;
};

const startGcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const getQuestionAndAnswer = () => {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = String(getGcd(firstNumber, secondNumber));
    return [question, correctAnswer];
  };

  index(rules, getQuestionAndAnswer);
};

export default startGcdGame;
