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
//cart
let cart = [];

//grabbing products
document.addEventListener("DOMContentLoaded", () => {
  fetch(url)
    .then((response) => response.json())
    .then((RestaurantNamesObject) => {
      renderRestaurantNamesList(RestaurantNamesObject);
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
            <button class="bag-btn" data-id=${restaurantNameObject.id}>
              <i class="fas fa-shopping-cart"></i>
                add to cart
            </button>
          </div>
          <h3>${restaurantNameObject.name}</h3>
          <h4>${restaurantNameObject.category}</h4>
        </article>
      `;
  });
  restaurantsDOM.innerHTML = result;
}

function getBagButtons() {
  const buttons = [...document.querySelectorAll(".bag-btn")];
  buttons.forEach((button) => {
    let id = button.dataset.id;
    let inCart = cart.find((item) => item.id === id);
    if (inCart) {
      button.innerText = "In Cart";
      button.disabled = true;
    } else {
      button.addEventListener("click", (event) => {
        event.target.innerText = "In Cart";
        event.target.disabled = true;
      });
    }
  });
}

class Storage {
  static saveRestaurants(restaurants) {
    localStorage.setItem("restaurants", JSON.stringify(restaurants));
  }
}
