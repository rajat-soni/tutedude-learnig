
const cartArray = [
  {
    service: "Dry Cleaning",
    price: 5000,
    image: "https://images.pexels.com/photos/8774451/pexels-photo-8774451.jpeg",
    isadded: false
  },
  {
    service: "Ironing",
    price: 3000,
    image: "https://images.pexels.com/photos/28576619/pexels-photo-28576619.jpeg",
    isadded: false
  },
  {
    service: "Stain Cleaning",
    price: 7000,
    image: "https://images.pexels.com/photos/4992081/pexels-photo-4992081.jpeg",
    isadded: false
  },

  {
    service: "Shipping",
    price: 200,
    image: "https://images.pexels.com/photos/7289742/pexels-photo-7289742.jpeg",
    isadded: false
  }
];


let currentIndex = 0;
let selectedProducts = [];


const image = document.querySelector(".image-product");
let totalCount = document.querySelector(".totalCount")
const amountShow = document.querySelector(".amount-show");
const totalPrice = document.querySelector(".price");
const showamount = document.querySelector('.show-amount')
const addBtn = document.querySelector(".add-btn");
const skipBtn = document.querySelector(".skip-btn");
const services = document.querySelector(".service")
let errormsg  = document.getElementById("error-msg")


// for form  validation 
let fullName = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone");
let error_msg = document.querySelector(".error_msg");
let form_sucs = document.querySelector(".form-sucs-msg")
let btn =  document.querySelector(".btn")


showCurrentProduct();

function showCurrentProduct() {
  if (currentIndex >= cartArray.length) {
        return;
    }
  image.src = cartArray[currentIndex].image;
  showamount.textContent = "₹"+cartArray[currentIndex].price
  services.textContent = cartArray[currentIndex].service
}

skipBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= cartArray.length) {
      currentIndex = 0;
      return
    }
    showCurrentProduct();
});

addBtn.addEventListener("click", () => {

  const product = cartArray[currentIndex];

   if (currentIndex >= cartArray.length) {
    currentIndex = 0;
  
  }
  if(cartArray[currentIndex].isadded){
   errormsg.innerHTML = "Product already added!"

    return

  }
  cartArray[currentIndex].isadded = true;
  currentIndex++;

  showCurrentProduct();
  renderProducts();
});

function renderProducts() {
  let ui = "";
  let total = 0;

  cartArray.forEach((item, index) => {

  
    if (item.isadded) {

        total += item.price;
      ui += `<div style=" padding:0px 40px;display:flex; justify-content:space-between; flex-direction:row; gap:20px;margin-bottom:10px; width: 100%;">
            

                <div>${index + 1}</div>

                <div>${item.service}</div>

                <div>₹${item.price}</div>


            </div>
        `;

    }

  });

  totalCount.textContent = `₹${total}`;
   amountShow.innerHTML = ui;
}





//  form validation function code 



function validation () {

  if(fullName.value.trim() === "") {
    error_msg.textContent = "Please enter your full name"
    return false
  }

  if(email.value.trim() === "") {
    error_msg.textContent = "Please enter your email"
    return false;
  }

    if(phone.value.trim() === "") {
    error_msg.textContent = "Please enter your phone number"
    return false
  }

  error_msg.textContent = ""
  return true;
}


 btn.addEventListener("click", function(){

if(validation()) {
  form_sucs.textContent = "Data send sucessfully."
}
 })

// function removeProduct(index) {

//   selectedProducts.splice(index, 1);

//   renderProducts();
// }