document.addEventListener("DOMContentLoaded", () => {
  User.createUser();
  User.signinUser();  
  User.logoutUser();
  Restaurant.instances = [];
  Restaurant.fetchRestaurants();
});