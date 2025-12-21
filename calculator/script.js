let currentInput = '';
let previousInput = '';
let currentOperation = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperation(operation) {
    if (currentInput === '') return;

    if (previousInput !== '') {
        calculate();
    }

    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;

    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    let result;

    switch (currentOperation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if (curr === 0) {
                clearDisplay();
                document.getElementById('display').textContent = 'Error';
                return;
            }
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    currentOperation = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function appendDecimal() {
    if (currentInput.includes('.')) return;
    currentInput = currentInput === '' ? '0.' : currentInput + '.';
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    const text =
        (previousInput ? previousInput + ' ' : '') +
        (currentOperation ? currentOperation + ' ' : '') +
        (currentInput ? currentInput : '');

    display.textContent = text || '0';
}
