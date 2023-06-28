import index from '../index.js';
import getRandomNumber from '../utilities.js';

const even = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestionAndAnswer = () => {
    const question = getRandomNumber();
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  index(rules, getQuestionAndAnswer);
};

export default even;
