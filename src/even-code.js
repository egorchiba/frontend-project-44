import whatsYourName from "../src/welcome.js";
import askQuestion from "./question.js";
import getAnswer from "./get-answer.js";
import { correctAnswerResult, wrongAnswerResult } from "./answer-results.js";
import readlineSync from 'readline-sync';

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
    const randomExpression = Math.floor(Math.random() * 101);
    const answer = getCorrectAnser(randomExpression);
    askQuestion(randomExpression);
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