function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}
let num1 = undefined, num2 = undefined, currentOperator = 'none';

const display = document.querySelector('#display');
const numButton = document.querySelectorAll('.numButton');
numButton.forEach((num) => {
    num.addEventListener('click', () => {
        display.textContent += num.textContent;
        display.textContent = Number(display.textContent);

    });

});



const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (currentOperator === 'none') {
            num1 = display.textContent;
            currentOperator = operator.textContent;
            display.textContent = '0';
        }
        else {
            num2 = display.textContent;
            num1 = operate(currentOperator, num1, num2);
            currentOperator = operator.textContent;
            display.textContent = '0';
        }
    });
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    num2 = display.textContent;
    display.textContent = operate(currentOperator, num1, num2);
    num1 = display.textContent;
    currentOperator = 'none';

});





const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = '0';
    num1 = undefined;
    num2 = undefined;

});
