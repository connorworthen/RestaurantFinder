const userUrl = "http://localhost:3000/users";
class User {
  constructor(
    first_name,
    last_name,
    email,
    password
  ) {
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.password = password
  }


  static createUser() {
    document.getElementsByClassName("form-button-signup nav-button").addEventListener("click", () => {
      User.renderNewUser();
      document.getElementsByClassName("signup-modal")[0].style.display =
        "block";
    });
  }

  static renderNewUser() {
    document.getElementsByClassName("modal-start")[0].innerHTML = `
      <form class="form-box">
        <div class="close-x">X</div>
        <h2 class="form-title">Welcome to Food Finder!</h2>
          <input type="text" placeholder="First Name *" class="form-input" value="">

          <input type="text" placeholder="Last Name *" class="form-input" value="">

          <input type="text" placeholder="Enter Email *" class="form-input" value="">

          <input type="text" placeholder="Password *" class="form-input" value="">
          
          <input type="submit" class="form-button" value="Create Account">
      </form>
    `;
    // Restaurant.renderPostNewRestaurant();
  }
}