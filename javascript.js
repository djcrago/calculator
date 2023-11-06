let operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
}

let firstNumber;
let operator;
let secondNumber;

function operate(a, op, b) {
    return operators[op](+a, +b);
};

function equals() {
    let equation = display.textContent;
    let eqArray = equation.split(' ');
    let answer;
    console.log(eqArray);
    console.log(eqArray.length);
    if(eqArray.length <= 3) {
        answer = operate(eqArray[0], eqArray[1], eqArray[2]);
    } else {
        answer = eqArray.reduce((sum, current) => {
            current = eqArray[0];
            let op = eqArray[1];
            let nextNumber = eqArray[2];
            let currentSum = operate(current, op, nextNumber);
            sum += currentSum;
            eqArray.splice(0, 2);
            return sum;
        }, 0);
    }
    display.textContent = answer;
}

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        display.textContent += number.id;
    });
});

const opButtons = document.querySelectorAll('.operator');
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += ' ' + button.id + ' ';
    });
});

const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', equals);

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = '';
});

display.textContent = '3 + 3 + 3';
console.log(equals())