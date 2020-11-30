document.addEventListener("DOMContentLoaded", () => {
  User.createUser();
  User.signinUser();  
  User.userProfile();
  Restaurant.instances = [];
  Restaurant.fetchRestaurants();
});