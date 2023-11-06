let operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
}

function operate(a, op, b) {
    return operators[op](+a, +b);
};

const display = document.querySelector('#display');
display.textContent = '0';

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        let numberToAdd = number.id;
        addNumber(numberToAdd);
    });
});

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        let operatorToAdd = operatorBtn.id;
        addOperator(operatorToAdd);
    });
});

const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', equals);

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = '0';
});

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', addDecimal);

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', backSpace);

function addNumber(number) {
    if (display.textContent === '0' || display.textContent === 'Don\'t divide by zero!') {
        display.textContent = '';
    }
    display.textContent += number;
}

function addOperator(operator) {
    if (display.textContent.length > 4 && display.textContent.charAt(display.textContent.length-1) === ' ') { //if user tries to input two operators in a row, change the current operator to the new one
        let str = display.textContent;
        display.textContent = str.slice(0, -3);
        display.textContent += ' ' + operator + ' ';
    } else display.textContent += ' ' + operator + ' ';
}

function addDecimal() {
    if (display.textContent.includes('.') === false) {
        display.textContent += '.';
    }
}

function backSpace() {
    let str = display.textContent;
    if (str.slice(-1) === ' ') {
        display.textContent = str.slice(0, -3);
    } else if (str.length === 1) {
        display.textContent = '0'
    } else display.textContent = str.slice(0, -1);
}

function equals() {
    let equation = display.textContent;
    let equationArr = equation.split(' ');
    let answer = operate(equationArr[0], equationArr[1], equationArr[2]);
    equationArr.splice(0, 3);
    while (equationArr.length > 0) {
        answer = operate(answer, equationArr[0], equationArr[1]);
        equationArr.splice(0, 2);
    }
    if (answer == 'Infinity' || answer == '-Infinity' || isNaN(answer)) {
        display.textContent = 'Don\'t divide by zero!';
    } else display.textContent = Math.round(answer * 100) / 100;
}

const body = document.querySelector('body');
body.addEventListener('keydown', () => { //keyboard support
    let key = event.key;
    console.log(key);
    if (key === 'Tab') {
        event.preventDefault();
    } else if (key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9' || key === '0') {
        addNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        addOperator(key);
    } else if (key === '.') {
        addDecimal();
    } else if (key === 'Enter' || key === '=') {
        equals();
    } else if (key === 'Backspace') {
        backSpace();
    }
});