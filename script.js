const body = document.querySelector("body");
const themeInput = document.getElementById("theme-input");

let theme = localStorage.getItem("theme");
if (theme == 1) {
  body.classList = "";
  themeInput.value = 1;
} else if (theme == 2) {
  themeInput.value = 2;
  body.classList.add("light");
} else if (theme == 3) {
  themeInput.value = 3;
  body.classList.add("dark");
}

themeInput.addEventListener("input", (event) => {
  checkInputValue(event.target.value);
  localStorage.setItem("theme", event.target.value);
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
const operators = Array.from(document.querySelectorAll(".operator"));
const deleteBtn = document.getElementById("delete-btn");
const resetBtn = document.getElementById("reset-btn");
const equalBtn = document.getElementById("equal-btn");
const result = document.getElementById("result");

let currentInput = "";
let previousInput = "";
let currentOperator = "";
result.textContent = 0;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    currentInput += number.textContent;
    result.textContent = currentInput;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (currentInput) {
      previousInput = currentInput; // save the input
      currentOperator = operator.textContent; // save the operator
      currentInput = "";
      // result.textContent = ""; // clear display
    }
  });
});

equalBtn.addEventListener("click", () => {
  if (previousInput && currentOperator) {
    currentInput = result.textContent;

    result.textContent = calculate(
      previousInput,
      currentInput,
      currentOperator
    );
    // reset
    currentInput = result.textContent; // store the current display value
    previousInput = "";
    currentOperator = "";
  }
});

deleteBtn.addEventListener("click", () => {
  result.textContent = result.textContent.slice(0, -1);
});

resetBtn.addEventListener("click", () => {
  currentInput = "";
  previousInput = "";
  currentOperator = "";

  result.textContent = 0;
});

function calculate(previous, current, operator) {
  let curr = parseFloat(current);
  let prev = parseFloat(previous);

  switch (operator) {
    case "+":
      calculationResult = prev + curr;
      break;

    case "-":
      calculationResult = prev - curr;
      break;

    case "*":
      calculationResult = prev * curr;
      break;

    case "/":
      if (curr === 0) {
        return 0;
      }
      calculationResult = prev / curr;
      break;
    default:
      return current;
  }
  return calculationResult.toString();
}
