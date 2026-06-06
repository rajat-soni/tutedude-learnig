// program for calculate the compound interest..


let principal =  40000;
let rate = 3;
let time = 2;
let n =   1;

let amount = principal * Math.pow((1+rate/(100*n)),n*time)
let compoundInterest = amount-principal;
console.log("pricipal",principal);
console.log("finalamount",amount.toFixed(2))
console.log("compoundinterest",compoundInterest.toFixed(2))
