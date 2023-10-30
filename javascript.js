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
    return operators[op](a, b);
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
});
