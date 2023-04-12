import index from './index.js';

const even = () => {
  const getExpression = () => {
    const randomExpression = Math.floor(Math.random() * 100 + 1);

    return randomExpression;
  };

  const getCorrectAnser = (expression) => {
    if (expression % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const expressionsAndAnswers = [[], [], []];

  for (let i = 0; i <= 2; i += 1) {
    expressionsAndAnswers[i].push(getExpression());
    expressionsAndAnswers[i].push(getCorrectAnser(expressionsAndAnswers[i][0]));
  }
  index(rules, expressionsAndAnswers);
};

export default even;
