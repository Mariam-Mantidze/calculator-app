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

// body.classList.toggle("light");
// body.classList.toggle("dark");
