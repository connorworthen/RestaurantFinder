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
            <button id=${this.id}>Details</button>
            <div class="modal">
              <div class="modal-header">
                <span class="close-btn">&times;</span>
                  <h1>${this.name}</h1>
                </div>
              <div class="modal-content">
                <p>${this.category}</p>
              </div>
          </div>
          <h3>${this.name}</h3>
        </article>
    `;
  }

  addRestaurantModal() {
    modalBtn = document.addEventListener("click", function () {
      document.getElementById("27").style.display = "block";
    });
    closeBtn = document.addEventListener("click", function () {
      document.document.querySelector(".close-btn").style.display = "none";
    });
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
          new_restaurant.addRestaurantModal();
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
