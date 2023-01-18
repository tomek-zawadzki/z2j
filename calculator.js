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

let result;

const addition = (a, b) => {
  result = a + b;
  return result;
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
const reset = (a, b) => {
  result = 0;
  return result;
};

console.log(addition(2, 8));
