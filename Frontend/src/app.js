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

// async function fetchRestaurants() {
//   const response = await fetch(url);
//   return await response.json();
// }

// document.addEventListener("DOMContentLoaded", () => {
//   fetchRestaurants().then((results) => console.log(results));
// });
