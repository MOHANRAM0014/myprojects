let display = document.getElementById('display');
let currentNumber = '';
let currentOperator = '';
let previousNumber = '';
let decimalPoint = false;

function appendNumber(number) {
    if (number === '.' && decimalPoint) {
        return;
    }
    currentNumber += number;
    display.value = currentNumber;
    if (number === '.') {
        decimalPoint = true;
    }
}

function appendOperator(operator) {
    currentOperator = operator;
    previousNumber = currentNumber;
    currentNumber = '';
    display.value = previousNumber + ' ' + currentOperator + ' ';
    decimalPoint = false;
}

function calculate() {
    let result = 0;
    switch (currentOperator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            if (currentNumber === '0') {
                alert('Error: Division by zero');
                return;
            }
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
            case '%':
                if (currentNumber === '0') {
                    alert('Error: Division by zero');
                    return;
                }
                result = parseFloat(previousNumber) % parseFloat(currentNumber);
                break;    
    }
    display.value = result;
    currentNumber = result;
    previousNumber = '';
    currentOperator = '';
    decimalPoint = false;
}

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    currentOperator = '';
    decimalPoint = false;
}
