// //variables

// const cartBtn = document.querySelector(".cart-btn");
// const closeCartBtn = document.querySelector(".close-cart");
// const clearCartBtn = document.querySelector(".clear-cart");
// const cartDOM = document.querySelector(".cart");
// const cartOverlay = document.querySelector(".cart-overlay");
// const cartItems = document.querySelector(".cart-items");
// const cartTotal = document.querySelector(".cart-total");
// const cartContent = document.querySelector(".cart-content");
// const productsDOM = document.querySelector(".products-center");

const url = "http://localhost:3000/restaurants";
// const productsNameDiv = document.getElementById("products-name");

function renderRestaurantName(RestaurantNameObject) {
  const restaurantNameDiv = document.getElementById("restaurant-name-div");

  const restaurantNameH3 = document.createElement("h3");
  chatRoomNameH3.textContent = RestaurantNameObject.name;

  restaurantNameDiv.prepend(restaurantNameH3);

  // // Show the new message form
  // newMessageForm.style = "";
  // newMessageForm.dataset.restaurantNameId = RestaurantNameObject.id;

  // RestaurantNameObject.messages.forEach((messageObject) => {
  //   renderMessage(messageObject);
  // });
}

// function renderName(nameObject) {
//   const nameDiv = document.createElement("div");

//   nameDiv.innerHTML = ``;
//   nameDiv.textContent = nameObject.content;
//   nameDiv.dataset.messageId = nameObject.id;

//   productsNameDiv.prepend(nameDiv);
// }

function fetchRestaurants() {
  return fetch(url).then((response) => response.json());
}

document.addEventListener("DOMContentLoaded", () => {
  fetchRestaurants().then((results) => console.log(results));
});
