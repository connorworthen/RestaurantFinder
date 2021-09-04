// const BASE_URL = "http://localhost:3000"
// const restaurantService = new RestaurantService(BASE_URL)
// restaurantService.fetchRestaurants()
document.getElementById("signup-bttn").addEventListener('click', async () => {
  const { renderForm } = await import('./user.js')
  renderForm()
})