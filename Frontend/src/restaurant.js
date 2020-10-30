const url = "http://localhost:3000/restaurants";

class Restaurant {
  constructor(image, id, name, category) {
    this.image = image;
    this.id = id;
    this.name = name;
    this.category = category;
  }

  renderRestaurant() {
    document.querySelector(".products-center").innerHTML = ` 
      <article class="product">
          <div class="img-container">
            <img
              src=${restaurantNameObject.image.url}
              alt="product"
              class="product-img"
            />
            <button id=${restaurantNameObject.id}>Details</button>
          </div>
          <h3>${restaurantNameObject.name}</h3>
        </article>
    `;
  }

  fetchRestaurants() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}

// for (const restaurant of RestaurantNamesObject) { let restaurant_object = new Restaurant(restaurant['address'], restaurant['name']…} new_restaurant.renderRestaurant()restaurant_object.renderRestaurant()

// static getRestaurant() {
//   fetch(url)
//     .then((response) => response.json())
//     .then(function (places) {
//       let place_array = places["data"];
//       Restaurant.renderRestaurant();

//       for (let i = 0; i < place_array.length; i++) {
//         let new_place = new Restaurant(
//           place_array[i]["attributes"]["url"],
//           place_array[i]["id"],
//           place_array[i]["attributes"]["name"],
//           place_array[i]["attributes"]["category"]
//         );

//         new_place.renderRestaurant();

//         Restaurant.instances.push(new_place);
//       }
//     });
// }
