import index from '../index.js';
import getRandomNumber from '../utilities.js';

const startCalcGame = () => {
  const rules = 'What is the result of the expression?';
  const getQuestionAndAnswer = () => {
    const operationIndex = getRandomNumber(0, 2);
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    let question;
    let correctAnswer;
    switch (operationIndex) {
      case 0:
        question = `${firstNumber} + ${secondNumber}`;
        correctAnswer = String(firstNumber + secondNumber);
        break;
      case 1:
        question = `${firstNumber} - ${secondNumber}`;
        correctAnswer = String(firstNumber - secondNumber);
        break;
      default:
        question = `${firstNumber} * ${secondNumber}`;
        correctAnswer = String(firstNumber * secondNumber);
    }
    return [question, correctAnswer];
  };

  index(rules, getQuestionAndAnswer);
};

export default startCalcGame;
