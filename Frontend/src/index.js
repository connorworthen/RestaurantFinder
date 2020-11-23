document.addEventListener("DOMContentLoaded", () => {
  // Menu.instances = [];
  // Menu.fetchMenus();
  // User.createUser();
  // User.signinUser();
  User.instances = [];
  User.fetchUsers();
  Restaurant.instances = [];
  Restaurant.fetchRestaurants();
});