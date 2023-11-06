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
    let equationArr = equation.split(' ');
    let answer = operate(equationArr[0], equationArr[1], equationArr[2]);
    equationArr.splice(0, 3);
    while (equationArr.length > 0) {
        answer = operate(answer, equationArr[0], equationArr[1]);
        equationArr.splice(0,2);
    }
    if (answer == 'Infinity' || answer == '-Infinity' || isNaN(answer)) {
        display.textContent = 'Don\'t divide by zero!';
    } else display.textContent = Math.round(answer * 100) / 100;
}

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (display.textContent === 'Don\'t divide by zero!') {
            display.textContent = '';
        }
        display.textContent += number.id;
    });
});

const opButtons = document.querySelectorAll('.operator');
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.textContent !== '') {
            display.textContent += ' ' + button.id + ' ';
        }
    });
});

const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', equals);

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = '';
});