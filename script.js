let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", () => {
    let clear = document.querySelector("#clear");
    let equal = document.querySelector("#equal");
    let decimal = document.querySelector("#decimal");

    let numbers = document.querySelectorAll("#number");
    let operators = document.querySelectorAll("#operator");

    let previousScreen = document.querySelector("#previous");
    let currentScreen = document.querySelector("#current");
    
    numbers.forEach((number) => {
        number.addEventListener("click", (event) => {
            handleNumber(event.target.textContent);
            currentScreen.textContent = currentValue;
        });
    })
});

function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num;
    }
}