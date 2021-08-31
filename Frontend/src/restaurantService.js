
class RestaurantService {

  constructor(endpoint) {
    this.endpoint = endpoint
  }

  fetchRestaurants() {
    fetch(`${this.endpoint}/restaurants`)
    .then(resp => resp.json())
    .then(restaurants => {
      for (const restaurant of restaurants) {
        const r = new Restaurant(restaurant)
        console.log(r)
        r.pushToDOM()
      }
    })
  }
}