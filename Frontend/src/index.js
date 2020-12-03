document.addEventListener("DOMContentLoaded", () => {
  User.createUser();
  User.signinUser();  
  User.logoutUser();
  User.userFavorites();
  Restaurant.instances = [];
  Restaurant.fetchRestaurants();
});