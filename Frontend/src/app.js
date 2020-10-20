const url = "http://localhost:3000/restaurants";
const restaurantNameListDiv = document.getElementById("restaurant-names-list");

function renderRestaurantNamesList(restaurantNamesObject) {
  restaurantNamesObject.forEach((restaurantNameObject) => {
    renderRestaurantNameOnList(restaurantNameObject);
  });
}

function renderRestaurantNameOnList(restaurantNameObject) {
  const restaurantNameDiv = document.createElement("div");

  restaurantNameDiv.innerHTML = `${restaurantNameObject.name}`;

  restaurantNameListDiv.prepend(restaurantNameDiv);
}

document.addEventListener("DOMContentLoaded", () => {
  fetch(url)
    .then((response) => response.json())
    .then((RestaurantNamesObject) => {
      renderRestaurantNamesList(RestaurantNamesObject);
    });
});
