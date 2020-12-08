const restaurantUrl = "http://localhost:3000/restaurants";
class Restaurant {
  constructor(
    image,
    id,
    name,
    phone_number,
    address,
    hours,
    price,
    category
  ) {
    this.image = image;
    this.id = id;
    this.name = name;
    this.phone_number = phone_number;
    this.address = address;
    this.hours = hours;
    this.price = price
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
            <button id=${this.id}>Click Me!</button>
            <h3>${this.name}</h3>
      </article>
    `;
  }

  static favoriteRestaurant() { 
    document.getElementById("favorites").onclick = () => {
      console.log("it worked")
    }
  }

  static addRestaurantModal() {
    for (const restaurant of Restaurant.instances) {
      document.getElementById(`${restaurant.id}`).onclick = () => {
        document.getElementsByClassName("modal")[0].style.display = "block";
        document.getElementById("restaurant-name").innerHTML += `
        <h2 class="restaurant-display-name">${restaurant.name}</h2>
        <button id="favorites">Add to Favorites</button>
        `;
        document.getElementById("category").innerHTML += `
        <div><h5>Phone Number <i class="fas fa-phone"></i></h5> ${restaurant.phone_number}</div><br>

        <div><h5>Address <i class="fas fa-map-pin"></i></h5> ${restaurant.address}</div><br>

        <div><h5>Hours <i class="fas fa-business-time"></i></h5> ${restaurant.hours}</div><br>

        <div><h5>Price $-$$$ <i class="fas fa-money-bill-wave"></i></h5> ${restaurant.price}</div><br>

        <div><h5>Category <i class="fas fa-columns"></i></h5> ${restaurant.category}</div>
        `;
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
            restaurant["phone_number"],
            restaurant["address"],
            restaurant["hours"],
            restaurant["price"],
            restaurant["category"]
          );
          newRestaurant.renderRestaurant();
          Restaurant.instances.push(newRestaurant);
        }
        Restaurant.addRestaurantModal();
        // Restaurant.favoriteRestaurant();
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

          <input type="text" name="phone_number" placeholder="Phone Number *" class="form-restaurant">

          <input type="address" name="address" placeholder="Address *" class="form-restaurant">

          <input type="text" name="hours" placeholder="Restaurant Hours ex. 10:00 A.M. - 9:00 P.M. *" class="form-restaurant" rows = "5">

          <input type="price" name="price" placeholder="Price Range $-$$$ *" class="form-restaurant">

          <input type="category" name="category" placeholder="Category *" class="form-restaurant">

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
