import readlineSync from 'readline-sync';

const whatsYourName = () => {
  console.log('Welcome to Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export default whatsYourName;
