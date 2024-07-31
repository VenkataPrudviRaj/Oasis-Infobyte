let display = document.getElementById('display');
let currentOperation = null;
let firstOperand = '';
let secondOperand = '';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }
    display.value += number;
}

function setOperation(operation) {
    if (currentOperation !== null) calculate();
    firstOperand = display.value;
    currentOperation = operation;
    shouldResetDisplay = true;
}

function clearDisplay() {
    display.value = '';
    currentOperation = null;
    firstOperand = '';
    secondOperand = '';
}

function calculate() {
    if (currentOperation === null) return;
    secondOperand = display.value;
    display.value = operate(currentOperation, parseFloat(firstOperand), parseFloat(secondOperand));
    currentOperation = null;
}

function operate(operation, a, b) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        default:
            return null;
    }
}
