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
let num1 = undefined, num2 = undefined, currentOperator = 'none', newNum = true;

const display = document.querySelector('#display');
const numButton = document.querySelectorAll('.numButton');
numButton.forEach((num) => {
    num.addEventListener('click', () => {
        if (newNum === true) {
            display.textContent = '0';
            newNum = false;
        }
        display.textContent += num.textContent;
        display.textContent = Number(display.textContent);
        display.textContent=display.textContent.substring(0,8);

    });

});



const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (currentOperator === 'none') {
            num1 = display.textContent;
            currentOperator = operator.textContent;
            //display.textContent = '0';
            newNum = true;
        }
        else {
            num2 = display.textContent;
            num1 = operate(currentOperator, num1, num2);
            currentOperator = operator.textContent;
            //display.textContent = '0';
            display.textContent = num1;
            display.textContent=display.textContent.substring(0,8);
            newNum = true;
        }
    });
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    num2 = display.textContent;
    display.textContent = operate(currentOperator, num1, num2);
    display.textContent=display.textContent.substring(0,8);
    num1 = display.textContent;
    currentOperator = 'none';

});





const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = '0';
    num1 = undefined;
    num2 = undefined;
    newNum = true;

});
