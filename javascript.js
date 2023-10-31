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
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    let equation = display.textContent;
    console.log(equation);
    let eqArray = equation.split(' ');
    console.log(eqArray);
    let answer = operate(eqArray[0], eqArray[1], eqArray[2]);
    console.log(answer);
    display.textContent = answer;
});
