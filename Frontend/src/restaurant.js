const restaurantUrl = "http://localhost:3000/restaurants";
class Restaurant {
  constructor(
    image,
    id,
    name,
    address,
    category,
    price_range,
    closing_time,
    opening_time
  ) {
    this.image = image;
    this.id = id;
    this.name = name;
    this.address = address;
    this.category = category;
    this.price_range = price_range;
    this.opening_time = opening_time;
    this.closing_time = closing_time;
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
            <button id=${this.id}>Click Me!</button>
          <h3>${this.name}</h3>
        </article>
    `;
  }

  static addRestaurantModal() {
    for (const restaurant of Restaurant.instances) {
      document.getElementById(`${restaurant.id}`).onclick = () => {
        document.getElementsByClassName("modal")[0].style.display = "block";
        document.getElementById("restaurant-name").innerHTML += `<h2 class="restaurant-display-name">${restaurant.name}</h2>`;
        document.getElementById("category").innerHTML += `${restaurant.category}`;
        document.querySelector(".close-btn").style.display = "block";
      };
      document.querySelector(".close-btn").onclick = () => {
        document.querySelector(".close-btn").style.display = "none";
        document.getElementsByClassName("modal")[0].style.display = "none";
        document.getElementById("restaurant-name").innerHTML = ``;
        document.getElementById("category").innerHTML = ``;
      };
    }
  }

  static fetchRestaurants() {
    fetch(restaurantUrl)
      .then((response) => response.json())
      .then((restaurantData) => {
        for (const restaurant of restaurantData) {
          let newRestaurant = new Restaurant(
            restaurant["image"]["url"],
            restaurant["id"],
            restaurant["name"],
            restaurant["category"],
            restaurant["address"],
            restaurant["category"],
            restaurant["price_range"],
            restaurant["opening_time"],
            restaurant["closing_time"]
          );
          newRestaurant.renderRestaurant();
          Restaurant.instances.push(newRestaurant);
        }
        Restaurant.addRestaurantModal();
        Restaurant.createRestaurant();
      });
  }

  static createRestaurant() {
    document.getElementById("banner-btn").addEventListener("click", () => {
      Restaurant.renderNewRestaurant();
      document.getElementsByClassName("create-modal")[0].style.display =
        "block";
    });
  }

  static renderNewRestaurant() {
    document.getElementsByClassName("modal-title")[0].innerHTML = `
      <form class="formElem" id="formElem">
        <div class="close-form-restaurant">&times;</div>
        <h2 class="new-restaurant">Create New Restaurant</h2>
        
          <input type="text" name="name" placeholder="Restaurant Name *" class="form-restaurant">

          <input type="text" name="category" placeholder="Category *" class="form-restaurant">

          <input type="address" name="address" placeholder="Address *" class="form-restaurant">

          <input type="number" name="price Range" placeholder="Price Range 1-3 *" class="form-restaurant">

          <input type="time" name="opening_time" class="form-restaurant">

          <input type="time" name="closing_time" class="form-restaurant">

          <input type="file" name="image" class="form-restaurant">

          <input type="submit" class="form-submit" value="Submit"></input>
      </form>
    `;
    document.querySelector(".close-form-restaurant").onclick = () => {
      document.querySelector(".close-form-restaurant").style.display = "none";
      document.getElementsByClassName("create-modal")[0].style.display = "none";
    }
    Restaurant.renderPostNewRestaurant();
  }

  static renderPostNewRestaurant() {
    const formElem = document.getElementById('formElem');
    formElem.onsubmit = function(e) {
      e.preventDefault();
      const request = new XMLHttpRequest();
      request.open('POST', restaurantUrl)
      const formData = new FormData(document.getElementById("formElem"))
      request.send(formData);
      document.getElementsByClassName("create-modal")[0].style.display = "none";
    }
  };
}
