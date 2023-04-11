const correctAnswerResult = () => {
  console.log('Correct!'); 
}

const wrongAnswerResult = (wrongAnswer, correctAnswer, userName) => {
  console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
}

export { correctAnswerResult, wrongAnswerResult };