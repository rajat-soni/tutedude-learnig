const cartArray = [
  {
    id: 1,
    service: "Dry Cleaning",
    price: 5000,
    isadded: false,
  },
  {
    id: 2,
    service: "Ironing",
    price: 3000,
    isadded: false,
  },
  {
    id: 3,
    service: "Stain Cleaning",
    price: 7000,
    isadded: false,
  },
  {
    id: 4,
    service: "Shipping",
    price: 200,
    isadded: false,
  },
];


// emailjs.send("","template_hizxb4z");
// drBMNJbJPGwMfkSSr

let newArray = [];

formBtn = document.querySelector(".button-email");

function showCartData(idx, btn) {
  // let itemIdex =   cartArray.indexOf(idx)
  let item = cartArray[idx];
  // console.log(item, idx);

  if (!item.isadded) {

    newArray.push(item);
    item.isadded = true;
    btn.innerHTML= "<div class='icon'>remove item <i class='fa fa-minus-circle' style='font-size:14px;'></i></div>";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    
  } else {

     item.isadded = false;
    // let temp = [];
    // for (let i = 0; i < newArray.length; i++) {
     
    //   if (newArray[i] !== item) temp.push(newArray[i]);
    // }
    // newArray = temp;
    newArray = newArray.filter(
        cartItem => cartItem !== item
    );

    btn.innerHTML = " <div class='icon-1'>Add Item <i class='fa fa-plus-circle' style='font-size:14px;'></i> </div>";
     btn.style.backgroundColor = "#73c2fb";
    btn.style.color = "white";
  }

  updatedData();
}

function updatedData() {
  const cartContainer = document.querySelector(".content-div");

  cartContainer.innerHTML = "";
  let total = 0;

  newArray.forEach((item) => {
    total += item.price;
    cartContainer.innerHTML += `
          <div class="totalCount">
            <p>${item.id}</p>
            <p>${item.service}</p>
            <p>₹${item.price}</p>
        </div>
                
        `;
  });

  if (total == 0) {
    formBtn.disabled = true;
  } else {
    formBtn.disabled = false;
  }

  cartContainer.innerHTML += `
        <hr style="margin-top:20px;">
        <div class= "total">
        <div>Total</div> <h4> ₹${total}</h4>
        </div>
    `;
}

const serviceContainer = document.querySelector(".cartContainer");

cartArray.forEach((item, index) => {
  const card = document.createElement("div");

card.classList.add("service-card");

  card.innerHTML = `<p>${item.service}</p>
                    <p>₹${item.price}</p>
                   
                 <button class="btn-card" onclick="showCartData(${index}, this)">${item.isadded ?"remove item <i class='fa fa-minus-circle' style='font-size:14px; background-color:light-red;'></i>" : "add item <i class='fa fa-plus-circle' style='font-size:14px;'></i>"}
                 </button>`;

  // card.appendChild(btn);

  serviceContainer.appendChild(card);
});

let name = document.querySelector(".fullname")
let emailid = document.querySelector(".email")
let phone = document .querySelector(".phone")
let errorMsg = document.querySelector(".error-msg")
let sucessMsg = document.querySelector(".success-msg")
let buttonClick = document.querySelector(".button-email");


function validation () {

  if(name.value.trim() === "" ) {
   errorMsg.textContent = "Please enter full name"
    return false
  }

    if(emailid.value.trim() === "" ) {
      errorMsg.textContent = "Please enter the email"
        alert()
      return false
  }

    if(phone.value.trim() === "" ) {
      errorMsg.textContent = "Please enter the phone"
     return false
    }
  errorMsg.innerHTML = ""
  return true;
  
}

buttonClick.addEventListener("click", function (){

if(validation()) {
  sucessMsg.textContent = "Data submited sucessfully!"
}

})

//email vaidation //



emailjs.init({
    publicKey:"TZS4x_XJ5bbWaxkTw"
});

const form=document.querySelector(".new-button");
let fName = document.querySelector(".fullname-txt");
let emailId = document.querySelector(".email-txt");
let successMsgEmail = document.querySelector(".success-msg-email");
let errorMsgEmail = document.querySelector(".errorMsg-email");
let formContainer  = document.querySelector(".form-data");


//email vaidation // 
function validationEmail(){

    if(fName.value.trim() === ""){
        errorMsgEmail.textContent = "Please enter full name";
        successMsgEmail.textContent = "";
        return false;
    }

    if(emailId.value.trim() === ""){
        errorMsgEmail.textContent = "Please enter email";
        successMsgEmail.textContent = "";
        return false;
    }

    errorMsgEmail.textContent = "";
    return true;
}

form.addEventListener("click", function(e){

    e.preventDefault();

    if(validationEmail()){

        sendEmail();

    }

});




function sendEmail() {

  // if(!validationEmail()) {return; }
    // const servicesList = newArray
    //     .map(item => item.service)
    //     .join(", ");

    // let total = 0;

    // newArray.forEach(item => {
    //     total += item.price;
    // });

    emailjs.send(
        "service_4jlvpaj",
        "template_hizxb4z",
        {
            name: fName.value,
            email: emailId.value
            // phone: phone.value
            // services: servicesList,
            // total: total
        }
    )

    .then(function (response) {

        console.log("SUCCESS", response);

        successMsgEmail.innerHTML =
            "Thank You For Booking the Service.<br>We will get back to you soon!";

        errorMsgEmail.innerHTML = "";
        
        //  formContainer.reset();

    })

    .catch(function (error) {

        console.log("FAILED", error);

        errorMsgEmail.innerHTML = "Email not sent!";


    });
    
   

}