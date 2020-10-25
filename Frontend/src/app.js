const url = "http://localhost:3000/restaurants";
const restaurantNameListDiv = document.querySelector(".products-center");

document.addEventListener("DOMContentLoaded", () => {
  fetch(url)
    .then((response) => response.json())
    .then((RestaurantNamesObject) => {
      renderRestaurantNamesList(RestaurantNamesObject);
    });
});

function renderRestaurantNamesList(restaurantNamesObject) {
  restaurantNamesObject.forEach((restaurantNameObject) => {
    renderRestaurantNameOnList(restaurantNameObject);
  });
}

function renderRestaurantNameOnList(restaurantNameObject) {
  const restaurantNameDiv = document.createElement("div");
  restaurantNameDiv.innerHTML = `<img src=${restaurantNameObject.url} alt="product" class="product-img" />`;
  restaurantNameListDiv.prepend(restaurantNameDiv);
}

window.onload = function () {
  document.getElementById("button").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "flex";
  });
};

window.onload = function () {
  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";
  });
};
