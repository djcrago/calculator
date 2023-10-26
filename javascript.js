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