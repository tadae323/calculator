/*  Variables */
const numberKeys = document.querySelectorAll("[data-number]")
const operatorKeys = document.querySelectorAll("[data-operation")
const display = document.querySelector("#operation-window")
const clearBtn = document.querySelector("#clear")
const equal = document.querySelector("#equal")
let previousOperand = ""
let currentOperand = ""
let operator = ""
let operatorActive = false


/* Event listeners */

for (number of numberKeys) {
  number.addEventListener("click", appendNumber)
}

for (operatorKey of operatorKeys) {
  operatorKey.addEventListener("click", updateOperator)
}

clearBtn.addEventListener("click", clear)

equal.addEventListener("click", operate)


/* Functions */

function add(num1, num2) {
  let result = num1 + num2
  return result
}

function subtract(num1, num2) {
  let result = num1 - num2
  return result
}

function multiply(num1, num2) {
  let result = num1 * num2
  return result
}

function divide(num1, num2) {
  if (num2 === 0) {
    alert("You can't divide by 0!")
    clear()
    return
  } else {
    let result = num1 / num2
    return result
  }
}

function updateOperator(operatorKey) {
  operator = operatorKey.target.innerText
  operatorActive = true
  currentOperand = getDisplayNums()
}

function operate() {
  if (currentOperand) {
    previousOperand = currentOperand
    currentOperand = getDisplayNums()
  } 
  display.innerText = calculateResult()
  operatorActive = true
}

function calculateResult() {
  let result
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  switch (operator) {
    case "+":
      result = add(prev, current)
      break
    case "-":
      result = subtract(prev, current)
      break
    case "×":
      result = multiply(prev, current)
      break
    case "÷":
      result = divide(prev, current)
      break
  }
  return result
}

function appendNumber(e) {
  if (display.innerText.length > 13) return
  if (display.innerText === "0" || operatorActive === true) {
    display.innerText = e.target.innerText
    operatorActive = false
  } else {
    display.innerText += e.target.innerText
  }
}

function getDisplayNums() {
  return display.innerText
}

function clear() {
  previousOperand = ""
  currentOperand = ""
  operator = ""
  display.innerText = "0"
}