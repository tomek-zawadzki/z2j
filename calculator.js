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

let result = 0;
let a = 0;
let b = 0;
let sign = "";

const addition = (a, b) => {
  result = parseInt(a) + parseInt(b);
  return (resultValue.innerHTML = result);
};
const substraction = (a, b) => {
  result = a - b;
  return result;
};
const division = (a, b) => {
  result = a / b;
  return result;
};
const multiplication = (a, b) => {
  result = a * b;
  return result;
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

// const clickSign = (e) => {
//   if (e.target.closest("button").classList.contains("btn-sign")) {
//     const clickedButton = e.target.closest("button").textContent;
//     console.log(clickedButton);
//   }
// };

calculatorBox.addEventListener("click", clickNumber);

plusBtn.addEventListener("click", () => {
  resultValue.innerHTML = calculatorInput.value;

  sign = "+";
  result = calculatorInput.value;
  if (a === 0) {
    a = result;
    calculatorInput.value = "";
  } else {
    b = calculatorInput.value;
    addition(result, b);
    calculatorInput.value = "";
  }
  console.log(
    `+ clicked  a = ${a}   b = ${b}   sign = ${sign}   result = ${result}`
  );
});

equalsBtn.addEventListener("click", () => {
  b = calculatorInput.value;
  if (sign === "+") {
    console.log(
      `= clicked  a = ${a}   b = ${b}   sign= ${sign}   result= ${result}`
    );
    addition(result, b);
    calculatorInput.value = "";
  }
});
