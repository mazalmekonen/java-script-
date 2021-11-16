let queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const url = new URL(window.location.href);

let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');

userName.setAttribute("value", url.searchParams.get("fullName"));
userEmail.setAttribute("value", url.searchParams.get("email"));

let historyResults = [];

const multiple = (num1,num2) => {
  let sum = 0;
  for ( let i = 0; i < num2; i ++){
    sum = sum + num1;
  }
  return sum;
}


const divide = (num1,num2) => {
  let result = 0;
  while(num1 >= num2){
      num1 -= num2;
      result++;
  }
  
  return result;
}

const percent = (num1, num2) => {
  const multipleResult = multiple(num1,num2)
  return divide(multipleResult,100);
}

const power = (num1, num2) => {
  let result = num1;
  if(num2 === 0)
    return 1;
  for (let i = 1; i < num2; i ++){
    result = multiple(result,num1);
  }
  return result;
}

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.currentOperandTextElement.innerText = '';
      this.previousOperandTextElement.innerText = ''
      this.operation = undefined
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }
  
    compute(operator = null, prevOp = null, currOp = null) {
      let computation
      let prev = parseFloat(this.previousOperand)
      let current = parseFloat(this.currentOperand)
      if(operator && prevOp && currOp){
        this.operation = operator;
        prev = parseFloat(prevOp);
        current = parseFloat(currOp);
      }
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = multiple(prev,current);
          break
        case '÷':
          computation = divide(prev,current);
          break
        case '%':
            computation = percent(prev,current);
            break
        case '^':
          computation = power(prev,current);
          break
        default:
          return
      }
      this.currentOpToSaveForDisplay = this.currentOperand
      this.currentOperand = computation
      historyResults.push({number1: prev, number2: current, operator: this.operation, computation: computation})
      this.operation = undefined
      this.previousOperand = ''
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          this.getDisplayNumber(this.previousOperand).toString() + this.operation
      } else {
        this.previousOperandTextElement.innerText = this.previousOperandTextElement.innerText + this.currentOpToSaveForDisplay.toString()
        this.currentOpToSaveForDisplay = undefined;
      }
    }
  }
  
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

let number1;
let operator;
let number2;

let prevOperand = document.getElementById('prevOperand');
let currOperand = document.getElementById('currOperand');

// we do it this way and not by get because in mail we cant send &, then we send with ?
queryString = queryString.slice(queryString.indexOf('?') + 1);
if(queryString.includes('number1=')){
// Get the modal
var modal = document.getElementById("myModal");

modal.style.display = "block";

let proceedToCalculator = document.getElementById('proceedToCalculator');
let userNameToFill = document.getElementById('userNameToFill');
let userEmailToFill = document.getElementById('userEmailToFill');

proceedToCalculator.addEventListener('click', (event) => {
    if (userNameToFill.value == '' || userEmailToFill.value == '') {
        alert('please enter your deatails')
    } else {
      userName.value = userNameToFill.value;
      userEmail.value = userEmailToFill.value;
      modal.style.display = "none";
    }
})


  number1 = queryString.slice(queryString.indexOf('=') + 1,queryString.indexOf('?'))
  queryString = queryString.slice(queryString.indexOf('?') + 1)
  operator = queryString.slice(queryString.indexOf('=') + 1,queryString.indexOf('?'))
  queryString = queryString.slice(queryString.indexOf('?') + 1)
  number2 = queryString.slice(queryString.indexOf('=') + 1)


  prevOperand.innerHTML = number1;
  currOperand.innerHTML = number2;
  calculator.compute(operator, number1 , number2);
  calculator.updateDisplay()
}
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })

  let toHistory = document.getElementById('toHistory');

  toHistory.addEventListener('click', (event) => {
          let historyToString = [];
          for( let i = 0 ;i < historyResults.length; i ++){
            historyToString.push('Calculation number ' + (i+1) + ' is: ' + historyResults[i].number1.toString() + ' ' + historyResults[i].operator + ' ' + 
            historyResults[i].number2.toString() + ' = ' + historyResults[i].computation.toString())
          }
          window.location.href ='C:\\finalTest October21\\history\\history.html?fullName='+ userName.value + '&email=' + userEmail.value + '&history=' + historyToString
  })