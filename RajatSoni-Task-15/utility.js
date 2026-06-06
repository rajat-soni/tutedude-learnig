// Find max number in array //

let maxArry = [24,40,6,80,90,55];

let findMaxNum = (maxArry) => {

    let max = maxArry[0];

    for( let i = 1; i < maxArry.length; i++){
        
        if(maxArry[i] > max) {
        
            max = maxArry[i]
        }
    }
    return max
}

let result = findMaxNum(maxArry)
console.log(`Max array value is in array elements is: ${result}`)




//   Sum of all element in array //

let Arry = [23,45,2,46,89,12,34]
function SumElm (arry)
{
    let sumArry = 0;
    for(let i =0; i<Arry.length;i++)
    {
    sumArry += Arry[i]
    }
    console.log(`sum of number in array ${sumArry}`)
}

SumElm(Arry)




//  Odd number in array  elements //

let arryNumber = [23,45,22,10,34,24,33,5]
// let findArry = [];
let findOddNumber =  function(arryNumber) {

    let oddCount = 0; 

    for(let i = 0; i < arryNumber.length; i++) {

        if( arryNumber[i] % 2 !== 0){
            oddCount++;
            // findArry = arryNumber[i]   
        
        }
    }

    return oddCount
}

let resultOut = findOddNumber(arryNumber)
console.log(`Odd number in array elemnet is : ${resultOut}`);
