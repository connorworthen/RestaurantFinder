document.addEventListener("DOMContentLoaded", () => {
  // Menu.instances = [];
  // Menu.fetchMenus();
  User.createUser();
  User.signinUser();
  Restaurant.instances = [];
  Restaurant.fetchRestaurants();
});