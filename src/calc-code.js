import whatsYourName from './welcome.js';
import askQuestion from './question.js';
import getAnswer from './get-answer.js';
import { correctAnswerResult, wrongAnswerResult } from './answer-results.js';

const randomExpression = () => {
  return Math.floor(Math.random() * 101);
};

const getCorrectAnser = (expression) => {
  if (expression % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const even = () => {
  const userName = whatsYourName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const expression = randomExpression();
    const answer = getCorrectAnser(expression);
    askQuestion(expression);
    const userAnswer = getAnswer();
    if (userAnswer === answer) {
      correctAnswerResult();
    } else {
      wrongAnswerResult(userAnswer, answer, userName);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default even;