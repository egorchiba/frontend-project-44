import readlineSync from 'readline-sync';

const getAnswer = () => {
  const userAnswer = readlineSync.question(`Your answer: `);

  return userAnswer;
};

export default getAnswer;