// Sum of  first n number //

let num = 10;
let sum = 0;
for(let i=0; i<=num; i++) {
    sum = sum+i
    // sum += i;
    // console.log(` ${sum} ${i}`)
}
console.log(`sum of first n number is: ${sum}`)


//print table for given number 

let tablenumber = 2;

for(let i=0; i<=10; i++) {
    console.log(`table of 2 is : ${tablenumber} * ${i} = ${tablenumber*i}`)
}


// find prime number 

let primeNumber = 31;
let isPrimeNum = true;

if(primeNumber <= 1) {

    isPrimeNumber = false;

}else {

    for(let i = 2; i < primeNumber; i++){
        
        if(primeNumber % i === 0){
            isPrimeNum = false;
            break;
        }
    }
}
if(isPrimeNum){
    console.log(`number is prime number: ${primeNumber}`)
}else{
    console.log(`number is not prime number: ${primeNumber}`)
}


// Sum of digits 
let digitNumber = 123;
let temp = digitNumber;
let sumOfDigits= 0;

while(temp>0) {
    sumOfDigits += temp % 10;
    temp = Math.floor(temp/10)

}
console.log(`sum of digits: ${digitNumber} = ${sumOfDigits}`)


// armstrong number 

let armStrongNum = 153;
let tempNumber = armStrongNum;
let armSumNum = 0;

while (tempNumber > 0) {
    let digit = tempNumber%10;
    armSumNum += digit ** 3;

    tempNumber = Math.floor(tempNumber/10)

}

if (armSumNum === armStrongNum) {

    console.log(`number is armstrongnumber: ${armStrongNum}`)
}
else {

console.log(`number is not armstrongnumber: ${armStrongNum}`)
}

