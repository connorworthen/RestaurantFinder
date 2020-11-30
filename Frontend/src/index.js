document.addEventListener("DOMContentLoaded", () => {
  User.createUser();
  // User.createUser();
  // User.signinUser();  
  Restaurant.instances = [];
  Restaurant.fetchRestaurants();
});