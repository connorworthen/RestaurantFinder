const url = "http://localhost:3000/restaurants";

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
        document.getElementById(
          "restaurant-name"
        ).innerHTML += `${restaurant.name}`;
        document.getElementById(
          "category"
        ).innerHTML += `${restaurant.category}, ${restaurant.address}, ${restaurant.price_range}, ${restaurant.opening_time}, ${restaurant.closing_time}`;
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
    fetch(url)
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
      <form id="restaurant-submit">
	<h1>Create New Restaurant</h1>
          <label for="name">Name:</label>
          <input type="text" name="newname" id="newname"></input><br><br>
          
          <label for="category">Category:</label>
          <input type="text" name="newcategory" id="newcategory"></input><br><br>

          <label for="address">Address:</label>
          <input type="text" name="newaddress" id="newadress"></input><br><br>

          <label for="price_range">Price Range:</label>
          <input type="text" name="newprice_range" id="newprice_range"></input><br><br>

          label for="opening_time">Opening Time:</label>
          <input type="text" name="newopening_time" id="newopening_time"></input><br><br>

          label for="closing_time">Closing Time:</label>
          <input type="text" name="newclosing_time" id="newclosing_time"></input><br><br>
   
          <label for="img">Image:</label>
          <input id="file" type="file" name="newphoto" accept="image/png, image/jpg"/><br><br>
          
          <button id="38">Submit Restaurant</button>
      </form>
    `;
    Restaurant.renderPostNewRestaurant();
  }

  static renderPostNewRestaurant() {
    document.getElementById("restaurant-submit").onsubmit = function (event) {
      console.log("submit");

      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "applications/json",
          Accept: "applications/json",
        },
        body: JSON.stringify({
          restaurant: {
            name: event.target["newname"].value,
            category: event.target["newcategory"].value,
            address: event.target["newaddress"].value,
            price_range: event.target["newprice_range"].value,
            opening_time: event.target["newopening_time"].value,
            closing_time: event.target["newclosing_time"].value,
            image: event.target["newphoto"].files,
          },
        }),
      };
      fetch(url, configObj)
        .then((response) => response.json())
        .then((restaurantData) => {
          // debugger;
          let newRestaurant = new Restaurant(
            restaurant["name"],
            restaurant["category"],
            restaurant["address"],
            restaurant["category"],
            restaurant["price_range"],
            restaurant["opening_time"],
            restaurant["closing_time"],
            restaurant["newphoto"]
          );
          newRestaurant.renderRestaurant();
          Restaurant.instances.push(newRestaurant);
          Restaurant.addRestaurantModal();
        });
    };
  }
}
