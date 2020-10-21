<section class="hero">
    <div class="hero-content">
      <h3>See restaurants</h3>
      <a href="#" id="button" class="button">Click Me</a>
    </div>
  </section>

  <section class="card-container">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </section>

  <div class="bg-modal">
    <div class="modal-contents">
      <div class="close">+</div>
      <img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142" />

      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Category" />
        <a href="#" class="button">Submit</a>
      </form>
    </div>

  </div>
</html>

.hero {
background-image: url("http://richardmiddleton.me/modal-hero.jpg");
background-size: cover;
height: 420px;
width: 100%;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
}

.button {
background-color: blue;
border: 2px solid white;
border-radius: 30px;
text-decoration: none;
padding: 10px 28px;
color: white;
margin-top: 10px;
display: inline-block;
}

.card-container {
max-width: 800px;
margin: 50px auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
}

.card {
height: 300px;
width: 230px;
border: 1px solid darkgray;
border-radius: 3px;
margin: 10px;
}

.bg-modal {
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.8);
position: absolute;
top: 0;
display: flex;
justify-content: center;
align-items: center;
display: none;
}

.modal-contents {
width: 500px;
height: 300px;
background-color: white;
border-radius: 4px;
text-align: center;
padding: 20px;
position: relative;
}

input {
margin: 15px auto;
display: block;
width: 50%;
padding: 8px;
border: 1px solid gray;
}

.close {
position: absolute;
top: 0;
right: 10px;
font-size: 42px;
color: #333;
transform: rotate(45deg);
cursor: pointer;
}

<div>Logo made by <a href="https://www.designevo.com/logo-maker/" title="Free Online Logo Maker">DesignEvo free logo creator</a></div>

//variables

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

//cart
let cart = [];

//grabbing products
class Products {
async getProducts() {
try {
let result = await fetch("http://localhost:3000/restaurants");
let data = await result.json();
let products = data.items;
products = products.map((item) => {
const { title, price } = item.fields;
const { id } = item.sys;
const image = item.fields.image.fields.file.url;
return { title, price, id, image };
});
return products;
} catch (error) {
console.log(error);
}
}
}

//display products
class UI {}

//storage
class Storage {}

document.addEventListener("DOMContentLoaded", () => {
const ui = new UI();
const products = new Products();

//get all products
products.getProducts().then((data) => console.log(data));
});

// //grabbing products
// class Products {
// async getProducts() {
// try {
// let result = await fetch("http://localhost:3000/restaurants");
// let data = await result.json();
// let products = data.items;
// products = products.map((item) => {
// const { title, price } = item.fields;
// const { id } = item.sys;
// const image = item.fields.image.fields.file.url;
// return { title, price, id, image };
// });
// return products;
// } catch (error) {
// console.log(error);
// }
// }
// }

// //display products
// class UI {}

// //storage
// class Storage {}

// document.addEventListener("DOMContentLoaded", () => {
// const ui = new UI();
// const products = new Products();

// //get all products
// products.getProducts().then((data) => console.log(data));
// });

// const url = "http://localhost:3000/restaurants";

// async function getRestaurants() {
// const response = await fetch(url);
// const data = await response.json();
// console.log(data);
// }

// getRestaurants();

<!-- test product -->

        <article class="product">
          <div class="img-container">
            <img src="images/product1.jpg" alt="product" class="product-img" />
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              add to cart
            </button>
          </div>
            <h3><div id="restaurant-names-list"></div></h3>
          </div>
        </article>
        <!-- end of test product -->

Need to add images to rails db + image for each
