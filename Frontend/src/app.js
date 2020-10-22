const url = "http://localhost:3000/restaurants";
// const restaurantNameListDiv = document.getElementById("restaurant-names-list");
const restaurantNameListDiv = document.querySelector(".products-center");

function renderRestaurantNamesList(restaurantNamesObject) {
  restaurantNamesObject.forEach((restaurantNameObject) => {
    renderRestaurantNameOnList(restaurantNameObject);
  });
}

function renderRestaurantNameOnList(restaurantNameObject) {
  const restaurantNameDiv = document.createElement("div");

  restaurantNameDiv.innerHTML = `Restaurant: ${restaurantNameObject.name}`;

  restaurantNameListDiv.prepend(restaurantNameDiv);
}

function displayProduct(restaurantNamesObject) {
  let result = "";
  restaurantNamesObject.forEach((restaurantNameObject) => {
    result += `<article class="product"> <div class="img-container"> <img src=${restaurantNameObject.image} alt="product" class="product-img" /> <button class="bag-btn" data-id=${restaurantNameObject.id}> <i class="fas fa-shopping-cart"></i> add to cart </button> </div> <h3>${restaurantNameObject.name}</h3> <h3>${restaurantNameObject.address}</h3> </article>`;
  });
  restaurantNameListDiv.innerHTML = result;
}

document.addEventListener("DOMContentLoaded", () => {
  fetch(url)
    .then((response) => response.json())
    .then((RestaurantNamesObject) => {
      renderRestaurantNamesList(RestaurantNamesObject);
    });
});
