import index from "./index.js";

const calc = () => {
  const rules = 'What is the result of the expression?';
  const expressionsAndAnswers = [[], [], []];
  
  for (let i = 0; i <= 2; i += 1) {
    let operationIndex = Math.floor(Math.random() * 2);
    let firstNumber = Math.floor(Math.random() * 100);
    let secondNumber = Math.floor(Math.random() * 100);
    let expression;
    let correctAnswer; 
    switch (operationIndex) {
      case 0:
        expression = `${firstNumber} + ${secondNumber}`;
        correctAnswer = String(firstNumber + secondNumber);
        break;
      case 1:
        expression = `${firstNumber} - ${secondNumber}`;
        correctAnswer = String(firstNumber - secondNumber);
        break;
      case 2:
        expression = `${firstNumber} * ${secondNumber}`;
        correctAnswer = String(firstNumber * secondNumber);
        break;
    }

    expressionsAndAnswers[i].push(expression);
    expressionsAndAnswers[i].push(correctAnswer); 
  }
  index(rules, expressionsAndAnswers);
}

export default calc;