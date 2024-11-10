let operator = '';
let previousValue = '';
let currentValue = '';

let clear = document.querySelector("#clear");
let back = document.querySelector("#back");
let equal = document.querySelector("#equal");
let decimal = document.querySelector("#decimal");

let numbers = document.querySelectorAll("#number");
let operators = document.querySelectorAll("#operator");

let previousScreen = document.querySelector("#previous");
let currentScreen = document.querySelector("#current");

document.addEventListener("DOMContentLoaded", () => {
    displayOperation();
    changeCalculation();
});

function displayOperation() {
    numbers.forEach((number) => {
        number.addEventListener("click", (event) => {
            handleNumber(event.target.textContent);
            currentScreen.textContent = currentValue;
        });
    });

    operators.forEach((op) => {
        op.addEventListener("click", (event) => {
            handleOperator(event.target.textContent);
            previousScreen.textContent = previousValue + " " + operator;
            currentScreen.textContent = currentValue;
        })
    });
}

function changeCalculation() {
    clear.addEventListener("click", () => {
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    });

    equal.addEventListener("click", () => {
        if (currentValue !== "" && previousValue !== "") {
            calculate();
            previousScreen.textContent = '';
            if (previousValue <= 5) {
                currentScreen.textContent = previousValue;
            } else {
                currentScreen.textContent = previousValue.slice(0, 5) + "...";
            }
        }
    });

    decimal.addEventListener("click", () => {
        addDecimal();
    });

    back.addEventListener("click", () => {
        let value = currentScreen.textContent = currentValue.slice(0, -1);
        currentValue = value;
    });
}

function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+") {
        previousValue += currentValue;
    } else if (operator === "-") {
        previousValue -= currentValue;
    } else if (operator === "x") {
        previousValue *= currentValue;
    } else if (operator === "/") {
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

function addDecimal() {
    if (!currentValue.includes(".")) {
        currentValue += ".";
    }
}