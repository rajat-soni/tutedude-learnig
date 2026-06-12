
// This project demonstrates the  use of a javaScript Arrow function  that returns a Promise

const divideNumber = (number1, number2) => {

 return new Promise((resolve, reject) => {

    if(number2 === 0) {

        reject("Error: Division by zero is not valid.")

    }else {

      resolve(number1/number2)
    }
});
};
  
divideNumber(10,0)
.then(result => console.log(`Case: ${result}`))
.catch(error => console.log(`Case: ${error}`))

 divideNumber(16,2)
    .then(result => console.log(`Case1: ${result}`))
    .catch(error => console.log(`Case1: ${error}`));

  divideNumber(20,2)
    .then(result => console.log(`Case2: ${result}`))
    .catch(error => console.log(`Case2: ${error}`));
  
  
  divideNumber(10,2)
    .then(result=>console.log(`Case3: ${result}`))
    .catch(error => console.log(`Case3: ${error}`));


  divideNumber(50,2)
  .then(result => console.log(`Case4: ${result}`))
  .catch(error => console.log(`Case4: ${error}`));

  //   divideNumber(30,2)
  // .then(result => console.log(`Case5: ${result}`))
  // .catch(error => console.log(`Case5: ${error}`));