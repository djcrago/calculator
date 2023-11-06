let operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
}

function operate(a, op, b) {
    return operators[op](+a, +b);
};

function equals() {
    let equation = display.textContent;
    let eqArray = equation.split(' ');
    let answer;
    answer = operate(eqArray[0], eqArray[1], eqArray[2]);
    eqArray.splice(0, 3);
    while (eqArray.length > 0) {
        answer = operate(answer, eqArray[0], eqArray[1]);
        eqArray.splice(0,2);
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

display.textContent = '1 + 2 + 3';
console.log(equals())