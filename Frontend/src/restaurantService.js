
class RestaurantService {

  constructor(endpoint) {
    this.endpoint = endpoint
  }

  fetchRestaurants() {
    fetch(`${this.endpoint}/restaurants`)
    .then(resp => resp.json())
    .then(data => {
      let restaurants = data.slice(0, 3)
      for (const restaurant of restaurants) {
        const r = new Restaurant(restaurant)
        r.pushToDOM()
      }
    })
  }
}