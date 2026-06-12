
// This project demonstrates the  DOM Manipulation and Even Handling.
let box = document.querySelectorAll('.search-bar');
let = inputText = document.querySelector('input');
let btn = document.getElementById('btn-id')
let userId = document.getElementById('userId');

box.forEach((itemBox)  => {

  itemBox.addEventListener("click", function(event) {
  
    if(event.target.id === 'green'){
    
      itemBox.style.backgroundColor = event.target.id;

    }
     if(event.target.id === 'red'){
    
      itemBox.style.backgroundColor = event.target.id;

    }
     if(event.target.id === 'yellow'){
    
      itemBox.style.backgroundColor = event.target.id;

    }
     if(event.target.id === 'blue'){
    
      itemBox.style.backgroundColor = event.target.id;

    }

  })
})



// user input code //

btn.addEventListener('click', function(even) {
 let inputTextValue = inputText.value;
 userId.textContent = inputTextValue;
 
})