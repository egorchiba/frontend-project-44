import index from './index.js';

const prime = () => {
  const getNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);

    return randomNumber;
  };

  const isNumberPrime = (number) => {
    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const expressionsAndAnswers = [[], [], []];

  for (let i = 0; i <= 2; i += 1) {
    expressionsAndAnswers[i].push(getNumber());
    expressionsAndAnswers[i].push(isNumberPrime(expressionsAndAnswers[i][0]));
  }
  index(rules, expressionsAndAnswers);
};

export default prime;
