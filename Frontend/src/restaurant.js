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
      <form id="formElem" method="POST">
	<h1>Create New Restaurant</h1><br>
          <label for="name"><i class="fa fa-user"></i> Restaurant Name:</label>
          <input type="text" name="newname" id="newname"></input><br><br>
          
          <label for="category"><i class="fa fa-cutlery" aria-hidden="true"></i> Category:</label>
          <input type="text" name="newcategory" id="newcategory"></input><br><br>

          <label for="address"><i class="fa fa-address-card-o"></i> Address:</label>
          <input type="text" name="newaddress" id="newadress"></input><br><br>

          <label for="price_range"><i class="fa fa-money" aria-hidden="true"></i> Price Range:</label>
          <input type="number" name="newprice_range" id="newprice_range" min="1" max="3"></input><br><br>

          <label for="opening_time"><i class="fa fa-clock-o" aria-hidden="true"></i> Opening Time:</label>
          <input type="time" name="newopening_time" id="newopening_time"></input><br><br>

          <label for="closing_time"><i class="fa fa-clock-o" aria-hidden="true"></i> Closing Time:</label>
          <input type="time" name="newclosing_time" id="newclosing_time"></input><br><br>
   
          <label for="img"><i class="fa fa-file-image-o" aria-hidden="true"></i> Image:</label>
          <input type="file" name="newimage" accept="image/*"></input><br><br>
          
          <input type="submit">Submit</input>
      </form>
    `;
    Restaurant.renderPostNewRestaurant();
  }

  static renderPostNewRestaurant() {
    document.getElementById("formElem").onsubmit = function (e) {
      e.preventDefault();
      debugger
      let configObj = {
        method: "POST",
        body: JSON.stringify({
          restaurant: {
            name: e.target['newname'].value,
            category: e.target['newcategory'].value,
            address: e.target['newaddress'].value,
            price_range: e.target['newprice_range'].value,
            opening_time: e.target['newopening_time'].value,
            closing_time: e.target['newclosing_time'].value,
            image: e.target['newimage'].files[0],
            },
          }),
        };
      debugger
      fetch(url, configObj)
        .then((response) => response.json())
        .then((restaurantData) => {
          console.log(restaurantData)
          let newRestaurant = new Restaurant(
            // restaurantData['data']['id'],
            restaurantData['data']['name'],
            restaurantData['data']['category'],
            restaurantData['data']['address'],
            restaurantData['data']['price_range'],
            restaurantData['data']['opening_time'],
            restaurantData['data']['closing_time'],
            restaurantData['data']['image']['url']
            );
          Restaurant.instances.push(newRestaurant);
          newRestaurant.renderRestaurant();
        });
    };
  }
}
