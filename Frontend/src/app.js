//variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

//cart
let cart = [];

//grabbing products
class Restaurants {
  async getRestaurants() {
    try {
      let result = await fetch("http://localhost:3000/restaurants");
      let data = await result.json();
      let restaurants = data.items;
      restaurants = restaurants.map((item) => {
        const { name, category } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { name, category, id, image };
      });
      return restaurants;
    } catch (error) {
      console.log(error);
    }
  }
}
//display products
//storage
class UI {
  displayRestaurants(restaurants) {
    let result = " ";
    restaurants.forEach((restaurant) => {
      result += `
        <article class="product">
          <div class="img-container">
            <img
              src=${restaurant.image.url}
              alt="product"
              class="product-img"
            />
            <button class="bag-btn" data-id=${restaurant.id}>
              <i class="fas fa-shopping-cart"></i>
                add to cart
            </button>
          </div>
          <h3>${restaurant.name}</h3>
          <h4>${restaurant.category}</h4>
        </article>
      `;
    });
    productsDOM.innerHTML = result;
  }
}

class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const restaurants = new Restaurants();
  //get all products
  restaurants.getRestaurants().then((data) => console.log(data));
});
