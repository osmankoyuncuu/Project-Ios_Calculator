//?Selector
const container = document.querySelector(".container");
const screenDiv = document.querySelector(".screen");
const screenOpacityDiv = document.querySelector(".screen-opacity");
let process = "";
let number1 = null;
let number2 = null;
let result = null;

//?load
window.addEventListener("load", (e) => {
  e.preventDefault();
});

//?onclick
container.addEventListener("click", (event) => {
  if (event.target.classList.contains("number")) {
    if (screenDiv.innerText == 0) {
      screenDiv.innerText = event.target.innerText;
    } else {
      if (screenDiv.innerText.length < 10) {
        screenDiv.innerText += event.target.innerText;
      }
    }
  } else if (event.target.classList.contains("process")) {
    if (screenDiv.innerText == 0) {
      process = event.target.innerText;
      number1 = 0;
      screenOpacityDiv.innerHTML = `${screenDiv.innerHTML} ${process}`;
    } else {
      process = event.target.innerText;
      number1 = parseFloat(screenDiv.innerText);
      screenOpacityDiv.innerText = `${screenDiv.innerText} ${process}`;
      screenDiv.innerText = "0";
    }
  } else if (event.target.classList.contains("percent")) {
    result = screenDiv.innerText / 100;
    toFixed();
  } else if (event.target.classList.contains("minus-plus")) {
    screenDiv.innerText *= -1;
  } else if (event.target.classList.contains("dot")) {
    if (!screenDiv.innerText.includes(".")) {
      screenDiv.innerText += ".";
    }
  } else if (event.target.classList.contains("del")) {
    const delBtn = document.querySelector(".del");
    screenDiv.innerText = 0;
    screenOpacityDiv.innerText = "";
    delBtn.innerText = "AC";
  } else if (event.target.classList.contains("result")) {
    if (number1 != null && process != "") {
      number2 = parseFloat(screenDiv.innerText);
      processFunc();
      toFixed();
      number1 = number2 = result = null;
      process = "";
    }
  }
  //? del AC vs C
  if ((screenDiv.innerText != 0 || screenOpacityDiv.innerText) != "") {
    const delBtn = document.querySelector(".del");
    delBtn.innerText = "C";
  } else {
    const delBtn = document.querySelector(".del");
    delBtn.innerText = "AC";
  }
});

//?function
const processFunc = () => {
  switch (process) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "×":
      result = number1 * number2;
      break;
    case "÷":
      result = number1 / number2;
      break;
  }
};
//? number of digits
const toFixed = () => {
  if (result >= 1 && result % 1 === 0) {
    screenDiv.innerText = result;
  } else if (result >= 1) {
    screenDiv.innerText = result.toFixed(2);
  } else if (result == 0) {
    screenDiv.innerText = result.toFixed(0);
  } else if (result >= 0.01) {
    screenDiv.innerText = result.toFixed(3);
  } else if (result >= 0.0001) {
    screenDiv.innerText = result.toFixed(3);
  } else if (result >= 0.000001) {
    screenDiv.innerText = result.toFixed(9);
  } else if (result < 0 && result % 1 === 0) {
    screenDiv.innerText = result;
  } else {
    screenDiv.innerText = result.toFixed(2);
  }

  screenOpacityDiv.innerText = "";
};
