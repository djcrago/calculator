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
        if (display.textContent !== '' && display.textContent.charAt(display.textContent.length-1) !== ' ' && display.textContent.charAt(display.textContent.length-1) !== '.') { //don't start equation with operator && don't allow two operators in a row && don't allow a number to end with a decimal
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

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
    if (display.textContent.includes('.') === false) {
        display.textContent += '.';
    }
});

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    // let unedited = display.textContent;
    // let uneditedArr = unedited.split(' ');
    // let lastChar = unedited.slice(-1);
    // let spaceOrNoSpace = '';
    // if (lastChar === ' ') {
    //     uneditedArr.splice(-2, 2);
    // } else {
    //     uneditedArr.splice(-1, 1);
    //     spaceOrNoSpace = ' ';
    // }
    // let edited = uneditedArr.join(' ');
    // edited += spaceOrNoSpace;
    // display.textContent = edited;

    let str = display.textContent;
    if (str.slice(-1) === ' ') {
        display.textContent = str.slice(0, -3);
    } else display.textContent = str.slice(0, -1);
});