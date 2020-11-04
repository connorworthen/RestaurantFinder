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
            <button id=${this.id} onclick="addRestaurantModal('${this.id}')">Click Me!</button>
          <h3>${this.name}</h3>
        </article>
    `;
  }

  static addRestaurantModal(restaurant) {
    document.getElementById(`${restaurant.id}`).onclick = () => {
      document.getElementsByClassName("modal")[0].style.display = "block";
      document.getElementById(
        "restaurant-name"
      ).innerHTML += `${restaurant.name}`;
      document.getElementById("category").innerHTML += `${restaurant.category}`;
    };
    document.querySelector(".close-btn").onclick = () => {
      document.querySelector(".close-btn").style.display = "none";
      document.getElementById("restaurant-name").innerHTML = ``;
      document.getElementById("category").innerHTML = ``;
    };
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
          Restaurant.addRestaurantModal(new_restaurant);
        }
      });
  }
}
