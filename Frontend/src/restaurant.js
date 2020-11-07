const url = "http://localhost:3000/restaurants";

class Restaurant {
  constructor(image, id, name, category) {
    this.image = image;
    this.id = id;
    this.name = name;
    this.category = category;
    // this.address = address;
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
        ).innerHTML += `${restaurant.category}`;
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
            restaurant["category"]
            // restaurant["address"]
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
   
          <label for="img">Image:</label>
          <input id="file" type="file" name="newphoto" accept="image/png, image/jpg"/><br><br>
          
          <button id="38">Submit Restaurant</button>
      </form>
    `;
    Restaurant.renderPostNewRestaurant();
  }

  static renderPostNewRestaurant() {
    document.getElementById("restaurant-submit").onsubmit = function (event) {
      debugger;
      console.log("submit");

      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "applications/json",
        },
        body: JSON.stringify({
          restaurant: {
            name: event.target["newname"].value,
            category: event.target["newcategory"].value,
          },
        }),
      };
      fetch(url, configObj)
        .then((response) => response.json())
        .then((restaurantData) => {
          debugger;
          let newRestaurant = new Restaurant(
            restaurantData["image"]["url"],
            restaurant["id"],
            restaurant["name"],
            restaurant["category"]
            // restaurant["address"]
          );
          newRestaurant.renderRestaurant();
          Restaurant.instances.push(newRestaurant);
          Restaurant.addRestaurantModal();
        });
    };
  }
}
