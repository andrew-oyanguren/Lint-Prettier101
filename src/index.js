import './index.css';

const greeting = 'Hello';

const greetUser = (userName = '') => {
  return `${greeting} ${userName}`;
};

greetUser();

const sayGoodbye = (userName = '') => {
  const goodbye = 'Goodbye';
  return `Goodbye ${userName}`;
};

sayGoodbye();
