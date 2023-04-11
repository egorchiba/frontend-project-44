import whatsYourName from "../src/welcome.js";
import readlineSync from 'readline-sync';

const even = () => {
  const question = () => {
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question(`Your answer: `);

    if (randomNumber % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
        return true;
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
        return false;
      }
    } else if (answer === 'no') {
      console.log('Correct!');
      return true;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      return false;
    }
  }
  const userName = whatsYourName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    if (question() != true) {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}

export default even;