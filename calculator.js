const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const multiplicationBtn = document.querySelector(".multiplication-btn");
const divisionBtn = document.querySelector(".division-btn");
const resetBtn = document.querySelector(".reset-btn");
const equalsBtn = document.querySelector(".equals-btn");
const acBtn = document.querySelector(".ac-btn");
const cBtn = document.querySelector(".c-btn");
const percentBtn = document.querySelector(".percent-btn");
const moduloBtn = document.querySelector(".modulo-btn");
const btn = document.querySelectorAll(".btn");
const calculatorBox = document.querySelector(".calculator");
const calculatorInput = document.querySelector(".calculator__input");
const resultValue = document.querySelector(".result-value");
const signView = document.querySelector(".sign-view");
const alertInfo = document.querySelector(".calculator__alert");
const calculateBtns = document.querySelectorAll(".btn-sign");

let result = 0;
let a = 0;
let b = 0;
let sign = "";

const addition = (first, second) => {
  result = parseFloat(first) + parseFloat(second);
  return (resultValue.innerHTML = result.toFixed(2));
};
const substraction = (first, second) => {
  result = parseFloat(first) - parseFloat(second);
  return (resultValue.innerHTML = result.toFixed(2));
};
const division = (first, second) => {
  result = parseFloat(first) / parseFloat(second);
  return (resultValue.innerHTML = result.toFixed(2));
};
const multiplication = (first, second) => {
  result = parseFloat(first) * parseFloat(second);
  return (resultValue.innerHTML = result.toFixed(2));
};
const modulo = (first, second) => {
  result = parseFloat(first) % parseFloat(second);
  return (resultValue.innerHTML = result.toFixed(2));
};

const clickNumber = (e) => {
  if (e.target.closest("button").classList.contains("btn-number")) {
    const clickedButton = e.target.closest("button").textContent;
    calculatorInput.value += clickedButton;

    if (alertInfo.textContent !== "") {
      alertInfo.textContent = "";
    }
  }
};

const calculate = () => {
  b = calculatorInput.value;
  if (sign === "+") {
    addition(result, b);
  } else if (sign === "-") {
    substraction(result, b);
  } else if (sign === "/") {
    division(result, b);
  } else if (sign === "*") {
    multiplication(result, b);
  } else if (sign === "mod") {
    modulo(result, b);
  } else if (calculatorInput.value === "") {
    alert("najpier podaj liczbę");
    // alertInfo.textContent = "najpier podaj liczbę";
  }

  sign.innerHTML = "";
  calculatorInput.value = "";
};

calculateBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sign = btn.textContent;
    signView.innerHTML = sign;

    if (a === 0) {
      a = calculatorInput.value;
      result = parseFloat(a).toFixed(2);
      resultValue.innerHTML = result;
    } else if (calculatorInput.value === "") {
      alert("najpier podaj liczbę");
      // alertInfo.textContent = "najpier podaj liczbę";
    } else {
      b = calculatorInput.value;
      calculate();
    }

    console.log(result);

    calculatorInput.value = "";
  });
});

const reset = () => {
  a = 0;
  b = 0;
  result = 0;
  calculatorInput.value = "";
  resultValue.innerHTML = 0;
  sign = "";
  signView.innerHTML = "";
};

cBtn.addEventListener("click", () => {
  calculatorInput.value = "";
});

percentBtn.addEventListener("click", () => {
  calculatorInput.value /= 100;
});

calculatorBox.addEventListener("click", clickNumber);
equalsBtn.addEventListener("click", calculate);
resetBtn.addEventListener("click", reset);
