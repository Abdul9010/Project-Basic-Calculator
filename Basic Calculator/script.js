let currentInput = '0';
let operator = '';
let firstOperand = null;

function handleButtonClick(value) {
    if (currentInput === '0' || currentInput === 'Error') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        // If an operator is clicked, update firstOperand
        firstOperand = parseFloat(currentInput);
        currentInput = '0'; // Reset currentInput for the next number
        operator = value;
    }

    updateDisplay();
}



function clearDisplay() {
    currentInput = '0';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function calculate() {
    console.log(firstOperand);
    console.log("Calculate function is being called");
    console.log("Current Input:", currentInput);
    
    if ( firstOperand !== null) {
        const secondOperand = parseFloat(currentInput);
        console.log(secondOperand);

        if (!isNaN(secondOperand)) {
            let result;
            switch (operator) {
                case '+':
                    result = firstOperand + secondOperand;
                    break;
                case '-':
                    result = firstOperand - secondOperand;
                    break;
                case '*':
                    result = firstOperand * secondOperand;
                    break;
                case '/':
                    if (secondOperand !== 0) {
                        result = firstOperand / secondOperand;
                    } else {
                        result = 'Error';
                    }
                    break;
            }

            currentInput = result.toString();
            operator = '';
            firstOperand = null;
            updateDisplay(`= ${result}`);
        } else {
            // Handle the case where secondOperand is not a valid number
            currentInput = 'Error';
            operator = '';
            firstOperand = null;
            updateDisplay();
        }
    }
}


function updateDisplay(output = '') {
    document.getElementById('display').innerText = currentInput;
    console.log(currentInput);
    
}
