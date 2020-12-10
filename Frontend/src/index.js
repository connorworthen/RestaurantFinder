document.addEventListener("DOMContentLoaded", () => {
  User.createUser();
  User.signinUser();  
  User.logoutUser();
  User.userFavorites();
  Favorite.setFavorite();
  Restaurant.instances = [];
  Restaurant.fetchRestaurants();
});