//variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const restaurantsDOM = document.querySelector(".products-center");
const url = "http://localhost:3000/restaurants";
// const modal = document.querySelector(".modal");
// const ids = ["27", "28", "29", "30"];
//cart
let cart = [];
let buttonsDom = [];
//grabbing products
document.addEventListener("DOMContentLoaded", () => {
  fetch(url)
    .then((response) => response.json())
    .then((RestaurantNamesObject) => {
      // debugger;
      renderRestaurantNamesList(RestaurantNamesObject);
      modal = document.querySelector(".modal");
      modalBtn = document.getElementById("27");
      // modalBtn = document.querySelectorAll(RestaurantNamesObject.map(id => `#${id}`).join(', '));
      closeBtn = document.querySelector(".close-btn");
      modalBtn.onclick = function () {
        modal.style.display = "block";
      };
      closeBtn.onclick = function () {
        modal.style.display = "none";
      };
    });
});

//display products
function renderRestaurantNamesList(restaurantNamesObject) {
  let result = " ";
  restaurantNamesObject.forEach((restaurantNameObject) => {
    result += `
        <article class="product">
          <div class="img-container">
            <img
              src=${restaurantNameObject.image.url}
              alt="product"
              class="product-img"
            />
            <button id=${restaurantNameObject.id}>Details</button>
            <div class="modal">
              <div class="modal-header">
                <span class="close-btn">&times;</span>
                  <h1>${restaurantNameObject.name}</h1>
                </div>
              <div class="modal-content">
                <p>${restaurantNameObject.category}</p>
              </div>
            </div>
          </div>
          <h3>${restaurantNameObject.name}</h3>
        </article>
      `;
  });
  restaurantsDOM.innerHTML = result;
}
// document.getElementById(restaurantNameObject.id)
// modalBtn.onclick = function () {
//   modal.style.display = "block";
// };
// closeBtn.onclick = function () {
//   modal.style.display = "none";
// };
// window.onclick = function (e) {
//   if (e.target == modal) {
//     modal.style.display = "none";
//   }
// };
// function getBagButtons() {
//   const buttons = [...document.querySelectorAll(".bag-btn")];
//   buttonsDom = buttons;
//   buttons.forEach((button) => {
//     let id = button.dataset.id;
//     let inCart = cart.find((item) => item.id === id);
//     if (inCart) {
//       button.innerText = "In Cart";
//       button.disabled = true;
//     } else {
//       button.addEventListener("click", (event) => {
//         event.target.innerText = "In Cart";
//         event.target.disabled = true;
//         let cartItem = { ...Storage.getRestaurant(id), amount: 1 };
//         (cart = [...cart, cartItem]), Storage.saveCart(cart);
//       });
//     }
//   });
// }

// class Storage {
//   static saveRestaurants(restaurants) {
//     localStorage.setItem("restaurants", JSON.stringify(restaurants));
//   }
//   static getRestaurant(id) {
//     let restaurants = JSON.parse(localStorage.getItem("restaurants"));
//     return restaurants.find((restaurant) => restaurant.id === id);
//   }
// }
