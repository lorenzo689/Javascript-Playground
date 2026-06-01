let previousInput = ''
let currentOperation = ''
let currentInput = ''

const display = document.getElementById("display")

function appendNumber(number) {
    currentInput += number
    updateDisplay()
}

function appendOperation(operation) {
    if (currentInput === '') return 

    if (currentInput !== '') {
        calculate()
    }

    currentOperation = operation
    previousInput = currentInput
    currentInput = ''
    updateDisplay() 
}

function calculate() {
    if (previousInput === '' || currentInput === '') return 

    const prev = parseFloat(previousInput)
    const curr = parseFloat(currentInput)

    let result

    switch(currentOperation) {
        case '+':
            result = prev + curr 
            break 
        case '-':
            result = prev - curr 
            break 
        case '*':
            result = prev * curr 
            break 
        case '/':
            if (curr === 0) {
                clearDisplay()
                display.textContent = `Error`
                return
            }

            result = prev / curr 
            break 
        default: 
            return 
    }

    currentInput = result.toString()
    currentOperation = '' 
    previousInput = ''
    updateDisplay()
}

function clearDisplay() {
    previousInput = ''
    currentOperation = ''
    currentInput = ''
    updateDisplay()
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1)
    updateDisplay()
}

function appendDecimal() {
    if (currentInput.includes(".")) return 

    currentInput = currentInput === '' ? '0.' : currentInput + ''
}

function updateDisplay() {
    const text = 
    (previousInput ? previousInput + '' : '') +
    (currentOperation ? currentOperation + '' : '') +
    (currentInput ? currentInput + '' : '')

    display.textContent = text || '0' 
}