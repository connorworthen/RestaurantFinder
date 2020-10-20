const url = "http://localhost:3000/restaurants";

function renderRestaurantName(RestaurantNameObject) {
  const restaurantNameDiv = document.getElementById("restaurant-name-div");

  const restaurantNameH3 = document.createElement("h3");
  chatRoomNameH3.textContent = RestaurantNameObject.name;

  restaurantNameDiv.prepend(restaurantNameH3);
}

async function fetchRestaurants() {
  const response = await fetch(url);
  return await response.json();
}

document.addEventListener("DOMContentLoaded", () => {
  fetchRestaurants().then((results) => console.log(results));
});
