const url = "http://localhost:3000/restaurants";

class Restaurant {
  constructor(image, id, name, category) {
    this.image = image;
    this.id = id;
    this.name = name;
    this.category = category;
  }

  renderRestaurant() {
    document.querySelector(".products-center").innerHTML += ` 
      <article class="product">
          <div class="img-container">
            <img
              src=${this.image}
              alt="product"
              class="product-img"
            />
            </div>
            <button id=${this.id} onclick=${Restaurant.addRestaurantModal(
      this.id
    )}>Details</button>
          <h3>${this.name}</h3>
        </article>
    `;
  }

  static addRestaurantModal(restaurant) {
    debugger;
    // document.querySelector(`${restaurant.id}`).addEventListener("click", () => {
    //   console.log("hello");
    // document.getElementsByClassName("modal")[0].style.display = "block";
    // document.getElementById(
    //   "restaurant-name"
    // ).innerHTML += `${restaurant.name}`;
    // document.getElementById(
    //   "category"
    // ).innerHTML += `${restaurant.category}`;
    // // debugger;
    // });
    // document.querySelector(".close-btn").addEventListener("click", function () {
    //   document.querySelector(".close-btn").style.display = "none";
    //   document.getElementById("restaurant-name").innerHTML = ``;
    //   document.getElementById("category").innerHTML = ``;
    // });
  }

  static fetchRestaurants() {
    fetch(url)
      .then((response) => response.json())
      .then((restaurantData) => {
        for (const restaurant of restaurantData) {
          let new_restaurant = new Restaurant(
            restaurant["image"]["url"],
            restaurant["id"],
            restaurant["name"],
            restaurant["category"]
          );
          new_restaurant.renderRestaurant();
          // Restaurant.addRestaurantModal(new_restaurant);
        }
      });
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
