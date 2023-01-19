const zeroBtn = document.querySelector(".zero-btn");
const oneBtn = document.querySelector(".one-btn");
const twoBtn = document.querySelector(".two-btn");
const threeBtn = document.querySelector(".three-btn");
const fourBtn = document.querySelector(".four-btn");
const fiveBtn = document.querySelector(".five-btn");
const sixBtn = document.querySelector(".six-btn");
const sevenBtn = document.querySelector(".seven-btn");
const eightBtn = document.querySelector(".eight-btn");
const nineBtn = document.querySelector(".nine-btn");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const multiplicationBtn = document.querySelector(".multiplication-btn");
const divisionBtn = document.querySelector(".division-btn");
const resetBtn = document.querySelector(".reset-btn");
const equalsBtn = document.querySelector(".equals-btn");
const dotBtn = document.querySelector(".dot-btn");
const acBtn = document.querySelector(".ac-btn");
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
  result = parseInt(first) + parseInt(second);
  return (resultValue.innerHTML = result);
};
const substraction = (first, second) => {
  result = parseInt(first) - parseInt(second);
  return (resultValue.innerHTML = result);
};
const division = (first, second) => {
  result = parseInt(first) / parseInt(second);
  return (resultValue.innerHTML = result);
};
const multiplication = (first, second) => {
  result = parseInt(first) * parseInt(second);
  return (resultValue.innerHTML = result);
};
const reset = () => {
  result = 0;
  return result;
};

const clickNumber = (e) => {
  if (e.target.closest("button").classList.contains("btn-number")) {
    const clickedButton = e.target.closest("button").textContent;
    calculatorInput.value += clickedButton;
  }
};

const clickSign = (e) => {
  if (e.target.closest("button").classList.contains("btn-sign")) {
    const clickedButton = e.target.closest("button").textContent;
    sign = clickedButton;
    a = calculatorInput.value;
    resultValue.innerHTML = calculatorInput.value;
    console.log(sign);
    console.log(
      `+ clicked  a = ${a}   b = ${b}   sign = ${sign}   result = ${result}`
    );
    console.log(a + b);

    if (sign === "+" && parseInt(a) + parseInt(b) === result) {
      a = result;
      b = calculatorInput.value;
      equalOperation(a, b);
    }
    calculatorInput.value = "";
  }
};

calculatorBox.addEventListener("click", clickNumber);
calculatorBox.addEventListener("click", clickSign);
// plusBtn.addEventListener("click", () => {
//   sign = "+";
//   signView.innerHTML = sign;
//   if (a === 0) {
//     a = calculatorInput.value;
//     result = a;
//     resultValue.innerHTML = result;
//   } else {
//     b = calculatorInput.value;
//     addition(result, b);
//   }

//   console.log(
//     `+ clicked  a = ${a}   b = ${b}   sign = ${sign}   result = ${result}`
//   );

//   calculatorInput.value = "";
// });

// minusBtn.addEventListener("click", () => {
//   sign = "-";
//   signView.innerHTML = sign;

//   if (a === 0) {
//     a = calculatorInput.value;
//     result = a;
//     resultValue.innerHTML = result;
//   } else {
//     b = calculatorInput.value;
//     substraction(result, b);
//   }

//   calculatorInput.value = "";
// });

// divisionBtn.addEventListener("click", () => {
//   sign = "/";
//   signView.innerHTML = sign;

//   if (calculatorInput.value === "") {
//     alertInfo.textContent = "najpier podaj liczbę";
//   }

//   if (a === 0) {
//     a = calculatorInput.value;
//     result = a;
//     resultValue.innerHTML = result;
//   } else {
//     b = calculatorInput.value;
//     division(result, b);
//   }

//   calculatorInput.value = "";
// });

// equalsBtn.addEventListener("click", () => {
//   b = calculatorInput.value;
//   if (sign === "+" && calculatorInput.value !== "") {
//     addition(result, b);
//   } else if (sign === "-" && calculatorInput.value !== "") {
//     substraction(result, b);
//   } else if (sign === "/" && calculatorInput.value !== "") {
//     division(result, b);
//   } else {
//     alertInfo.textContent = "najpier podaj liczbę";
//   }

//   sign.innerHTML = "";
//   calculatorInput.value = "";
// });

const equalOperation = () => {
  b = calculatorInput.value;
  if (result !== 0) {
    a = result;
  }
  if (sign === "+") {
    console.log(`a = ${a}`, `b = ${b}`);
    addition(a, b);
  }

  calculatorInput.value = "";
  console.log(
    `= clicked  a = ${a}   b = ${b}   sign = ${sign}   result = ${result}`
  );
};

resetBtn.addEventListener("click", () => {
  a = 0;
  b = 0;
  result = 0;
  calculatorInput.value = "";
  resultValue.innerHTML = 0;
  sign = "";
  console.log(
    `reset clicked  a = ${a}   b = ${b}   sign = ${sign}   result = ${result}`
  );
});

equalsBtn.addEventListener("click", equalOperation);
