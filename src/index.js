import whatsYourName from './welcome.js';
import askQuestion from './question.js';
import getAnswer from './get-answer.js';
import { correctAnswerResult, wrongAnswerResult } from './answer-results.js';

const index = (rules, expressionsAndAnswers) => {
    const userName = whatsYourName();
    console.log(rules);
  
    for (let i = 0; i <= 2; i += 1) {
      askQuestion(expressionsAndAnswers[i][0]);
      const answer = expressionsAndAnswers[i][1];
      const userAnswer = getAnswer();
      if (userAnswer === answer) {
        correctAnswerResult();
      } else {
        wrongAnswerResult(userAnswer, answer, userName);
        break;
      }
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
  };
  
  export default index;
  