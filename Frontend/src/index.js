const BASE_URL = "http://localhost:3000"
const restaurantService = new RestaurantService(BASE_URL)
restaurantService.fetchRestaurants()
Search.searchBar.addEventListener('input', () => searchRestaurants(searchBar.value))

// document.addEventListener("DOMContentLoaded", () => {
//   User.createUser();
//   User.signinUser();  
//   User.logoutUser();
//   User.userFavorites();
//   Restaurant.instances = [];
//   Restaurant.fetchRestaurants();
// });