let previousNumber;
let nextNumber;
let currentOperator;

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const display = document.querySelector('#display');
display.textContent = '0';

document.querySelectorAll('.number').forEach((number) => {
  number.addEventListener('click', () => {
    updateDisplay(number.textContent);
  });
});

document.querySelectorAll('.operator').forEach((operator) => {
  operator.addEventListener('click', () => {
    setCurrentOperator(operator.textContent);
  });
});

document.querySelector('#equals').addEventListener('click', displayAnswer);

document.querySelector('#clear').addEventListener('click', clearDisplay);

document.querySelector('#decimal').addEventListener('click', addDecimal);

document.querySelector('#backspace').addEventListener('click', removeNumber);

document.querySelector('body').addEventListener('keydown', (event) => {
  keyboardSupport(event.key);
});

function operate(a = 0, b = 0, op = '+') {
  return operations[op](+a, +b);
}

function setPreviousNumber(number) {
  previousNumber = number;
}

function setNextNumber(number) {
  nextNumber = number;
}

function setCurrentOperator(number) {
  currentOperator = number;
}

function newEquation() {
  setPreviousNumber(display.textContent);
  setNextNumber(undefined);
  setCurrentOperator(undefined);
}

function updateDisplay(number) {
  if (currentOperator === undefined) {
    display.textContent === '0'
      ? (display.textContent = number)
      : (display.textContent += number);
    setPreviousNumber(display.textContent);
  }
  if (currentOperator !== undefined) {
    display.textContent === previousNumber
      ? (display.textContent = number)
      : (display.textContent += number);
    setNextNumber(display.textContent);
  }
}

function displayAnswer() {
  display.textContent = operate(previousNumber, nextNumber, currentOperator);
  newEquation();
}

function clearDisplay() {
  display.textContent = '0';
  newEquation();
}

function addDecimal() {
  if (!display.textContent.includes('.')) {
    display.textContent += '.';
  }
}

function removeNumber() {
  display.textContent.length === 1
    ? (display.textContent = '0')
    : (display.textContent = display.textContent.slice(0, -1));

  currentOperator === undefined
    ? setPreviousNumber(display.textContent)
    : setNextNumber(display.textContent);
}

function keyboardSupport(eventKey) {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['+', '-', '*', '/'];
  if (numbers.includes(eventKey)) {
    updateDisplay(+eventKey);
  }
  if (operators.includes(eventKey)) {
    setCurrentOperator(eventKey);
  }
  if (eventKey === '.') {
    addDecimal();
  }
  if (eventKey === 'Enter' || eventKey === '=') {
    displayAnswer();
  }
  if (eventKey === 'Backspace') {
    removeNumber();
  }
}
