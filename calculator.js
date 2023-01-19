const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const multiplicationBtn = document.querySelector(".multiplication-btn");
const divisionBtn = document.querySelector(".division-btn");
const resetBtn = document.querySelector(".reset-btn");
const equalsBtn = document.querySelector(".equals-btn");
const dotBtn = document.querySelector(".dot-btn");
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
  if (first === 0 || second === 0) {
    result = 0;
    return (resultValue.innerHTML = result.toFixed(2));
  } else {
    result = parseFloat(first) * parseFloat(second);
    return (resultValue.innerHTML = result.toFixed(2));
  }
};
const modulo = (first, second) => {
  result = parseFloat(first) % parseFloat(second);
  return (resultValue.innerHTML = result.toFixed(2));
};
const reset = () => {
  result = 0;
  return result;
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

calculatorBox.addEventListener("click", clickNumber);

plusBtn.addEventListener("click", () => {
  sign = "+";
  signView.innerHTML = sign;
  if (a === 0) {
    a = calculatorInput.value;
    result = parseFloat(a).toFixed(2);
    resultValue.innerHTML = result;
  } else if (calculatorInput.value === "") {
    alertInfo.textContent = "najpier podaj liczbę";
  } else {
    b = calculatorInput.value;
    addition(result, b);
  }

  calculatorInput.value = "";
});

minusBtn.addEventListener("click", () => {
  sign = "-";
  signView.innerHTML = sign;

  if (a === 0) {
    a = calculatorInput.value;
    result = parseFloat(a).toFixed(2);
    resultValue.innerHTML = result;
  } else if (calculatorInput.value === "") {
    alertInfo.textContent = "najpier podaj liczbę";
  } else {
    b = calculatorInput.value;
    substraction(result, b);
  }

  calculatorInput.value = "";
});

divisionBtn.addEventListener("click", () => {
  sign = "/";
  signView.innerHTML = sign;

  if (a === 0) {
    a = calculatorInput.value;
    result = parseFloat(a).toFixed(2);
    resultValue.innerHTML = result;
  } else if (calculatorInput.value === "") {
    alertInfo.textContent = "najpier podaj liczbę";
  } else {
    b = calculatorInput.value;
    division(result, b);
  }

  calculatorInput.value = "";
});

multiplicationBtn.addEventListener("click", () => {
  sign = "*";
  signView.innerHTML = sign;

  if (a === 0) {
    a = calculatorInput.value;
    result = parseFloat(a).toFixed(2);
    resultValue.innerHTML = result;
  } else if (calculatorInput.value === "") {
    alertInfo.textContent = "najpier podaj liczbę";
  } else {
    b = calculatorInput.value;
    multiplication(result, b);
  }

  calculatorInput.value = "";
});

moduloBtn.addEventListener("click", () => {
  sign = "mod";
  signView.innerHTML = sign;

  if (a === 0) {
    a = calculatorInput.value;
    result = parseFloat(a).toFixed(2);
    resultValue.innerHTML = result;
  } else if (calculatorInput.value === "") {
    alertInfo.textContent = "najpier podaj liczbę";
  } else {
    b = calculatorInput.value;
    modulo(result, b);
  }

  calculatorInput.value = "";
});

equalsBtn.addEventListener("click", () => {
  b = calculatorInput.value;
  if (sign === "+" && calculatorInput.value !== "") {
    addition(result, b);
  } else if (sign === "-" && calculatorInput.value !== "") {
    substraction(result, b);
  } else if (sign === "/" && calculatorInput.value !== "") {
    division(result, b);
  } else if (sign === "*" && calculatorInput.value !== "") {
    multiplication(result, b);
  } else if (sign === "mod") {
    modulo(result, b);
  } else {
    alertInfo.textContent = "najpier podaj liczbę";
  }

  sign.innerHTML = "";
  calculatorInput.value = "";
});

percentBtn.addEventListener("click", () => {
  if (a === 0) {
    a = calculatorInput.value;
    result = a / 100;
    resultValue.innerHTML = result;
  } else {
    result = result / 100;
    resultValue.innerHTML = result;
  }

  calculatorInput.value = "";
});

cBtn.addEventListener("click", () => {
  calculatorInput.value = "";
});

resetBtn.addEventListener("click", () => {
  a = 0;
  b = 0;
  result = 0;
  calculatorInput.value = "";
  resultValue.innerHTML = 0;
  sign = "";
  signView.innerHTML = "";
});
