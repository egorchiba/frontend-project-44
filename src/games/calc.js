import index from '../index.js';
import getRandomNumber from '../utilities.js';

const startCalcGame = () => {
  const rules = 'What is the result of the expression?';
  const getQuestionAndAnswer = () => {
    const operationIndex = getRandomNumber(0, 2);
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    const operators = ['+', '-', '*'];
    const question = `${firstNumber} ${operators[operationIndex]} ${secondNumber}`;
    let correctAnswer;
    switch (operationIndex) {
      case 0:
        correctAnswer = String(firstNumber + secondNumber);
        break;
      case 1:
        correctAnswer = String(firstNumber - secondNumber);
        break;
      default:
        correctAnswer = String(firstNumber * secondNumber);
    }
    return [question, correctAnswer];
  };

  index(rules, getQuestionAndAnswer);
};

export default startCalcGame;
