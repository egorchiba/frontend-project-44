import index from './index.js';

const getNod = (firstNumber, secondNumber) => {
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

const nod = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const expressionsAndAnswers = [[], [], []];

  for (let i = 0; i <= 2; i += 1) {
    const firstNumber = Math.floor(Math.random() * 99 + 1);
    const secondNumber = Math.floor(Math.random() * 99 + 1);
    const expression = `${firstNumber} ${secondNumber}`;
    const correctAnswer = String(getNod(firstNumber, secondNumber));
    expressionsAndAnswers[i].push(expression);
    expressionsAndAnswers[i].push(correctAnswer);
  }

  index(rules, expressionsAndAnswers);
};

export default nod;
