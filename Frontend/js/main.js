// const BASE_URL = "http://localhost:3000"
// const restaurantService = new RestaurantService(BASE_URL)
// restaurantService.fetchRestaurants()
import * as User from './user.js'

document.getElementById("signup-bttn").addEventListener("click", () => {
  User.test()
})



// document.addEventListener("DOMContentLoaded", () => {
  // User.createUser();
  // User.signinUser();  
  // User.logoutUser();
  // User.userFavorites();
  // Restaurant.instances = [];
  // Restaurant.fetchRestaurants();
  // checkAuth()
// });