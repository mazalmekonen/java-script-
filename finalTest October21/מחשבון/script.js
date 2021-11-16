const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const dotEl = document.querySelector(".dot")
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;


operationEl.addEventListener('click', (event) => {
    switch (event()) {
        case 1:
            operationEl == '+';
            break;
        case 2:
            operationEl == '-';
            break;
    }
    console.log();
})


function operationEl ( 'click', (event) => {
    const multiply(num1, num2) => {
        return;
}
    let resulMultiply = multiply(4, 5);
    console.log(resulMultiply);
};



