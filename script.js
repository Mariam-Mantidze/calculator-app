const body = document.querySelector("body");
const themeInput = document.getElementById("theme-input");

themeInput.addEventListener("input", () => {
  checkInputValue(themeInput.value);
});

function checkInputValue(value) {
  body.classList.remove("light", "dark");
  if (value == 2) {
    body.classList.add("light");
  } else if (value == 3) {
    body.classList.add("dark");
  }
}

// const executiveBtns = Array.from(document.querySelectorAll(".executive-btn"));

const numbers = Array.from(document.querySelectorAll(".number"));
const operators = Array.from(document.querySelectorAll(".operators"));
const deleteBtn = document.getElementById("delete-btn");
const resetBtn = document.getElementById("reset-btn");
const equalBtn = document.getElementById("equal-btn");
const result = document.getElementById("result");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    result.textContent += number.textContent;
  });
});

let currentInput = "";
let previousInput = "";
let currentOperator = "";

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    previousInput = currentInput; // save the input
    currentOperator = operator.textContent; // save the operator
    result.textContent = ""; // clear display
  });
});

equalBtn.addEventListener("click", () => {
  currentInput = result.textContent; // store the current display balue
  result.textContent = calculate(previousInput, currentInput, currentOperator);
});
