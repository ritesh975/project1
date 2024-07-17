let display = document.getElementById("display");
let calculation = [];

function addNumber(number) {
    calculation.push(number);
    display.textContent = calculation.join("");
}

function addOperator(operator) {
    calculation.push(operator);
    display.textContent = calculation.join("");
}

function addDecimal() {
    calculation.push(".");
    display.textContent = calculation.join("");
}

function clearDisplay() {
    calculation = [];
    display.textContent = "";
}

function calculate() {
    let result = eval(calculation.join(""));
    display.textContent = result;
    calculation = [result];
}
