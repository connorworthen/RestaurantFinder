document.addEventListener("DOMContentLoaded", () => {
  // Menu.instances = [];
  // Menu.fetchMenus();
  User.createUser();
  Restaurant.instances = [];
  Restaurant.fetchRestaurants();
});