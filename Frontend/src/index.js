document.addEventListener("DOMContentLoaded", () => {
  User.createUser();
  User.signinUser();  
  User.renderProfile();
  Restaurant.instances = [];
  Restaurant.fetchRestaurants();
});