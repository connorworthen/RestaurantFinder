const signupUrl = "http://localhost:3000/signup";
const loginUrl = "http://localhost:3000/login";

class User {
  constructor(username, password, id) {
    this.username = username
    this.password = password
    this.id = id
  }

  static renderNewUser() {
    document.getElementsByClassName("signup-form")[0].innerHTML = `
      <form class="form-box" id="form-box">
        <div class="close-form">&times;</div>
        <h2 class="form-title">Welcome, sign up below!</h2>

          <input type="text" id="username" placeholder="Username *" class="form-input" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">

          <input type="password" id="password" placeholder="Password *" class="form-input" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
          
          <input type="submit" class="form-button" value="Create Account">
      </form>
    `;
    document.querySelector(".close-form").onclick = () => {
      document.querySelector(".close-form").style.display = "none";
      document.getElementsByClassName("signup-modal")[0].style.display = "none";
    }
    // User.renderPostSignup();
  }

  static renderPostSignup(username, password) {

    let configObj = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({    
        user: {
          username,
          password
        }    
      })
    };

    fetch(signupUrl, configObj) 
      .then((response) => response.json())
      .then((userData) => {
        console.log(userData)
        // debugger
        User.currentUser = new User(userData['user']["data"]["attributes"]["username"], userData['user']["data"]['id'])
          localStorage.setItem('jwt_token', userData.jwt)
          localStorage.setItem('user_id', User.currentUser.id)
          localStorage.setItem('username', User.username)
      })
      document.getElementsByClassName("signup-modal")[0].style.display = "none";
  }

  static createUser() {
    document.getElementById("form-button-signup").onclick = () => {
      User.renderNewUser();
      // debugger
      User.signupFormHandler();
      document.getElementsByClassName("signup-modal")[0].style.display =
        "block";
    };
  }

  static signupFormHandler() {
    document.getElementById("form-box").onsubmit = (e) => {
      // debugger
      e.preventDefault()
      User.renderPostSignup(e.target['username'].value, e.target['password'].value)
      // debugger
        return false
    }
  }









  static signinUser() {
    document.getElementById("form-button-signin").onclick = () => {
      User.renderCurrentUser();
      document.getElementsByClassName("signin-modal")[0].style.display =
        "block";
    };
  }

  static renderCurrentUser() {
    document.getElementsByClassName("signin-form")[0].innerHTML = `
      <form class="form-box-signin" id="form-box-signin">
        <div class="close-form-signin">&times;</div>
        <h2 class="form-title-signin">Welcome back! Sign in below</h2>

          <input type="username" name="email" placeholder="Enter Email *" class="form-input">

          <input type="password" name="password" placeholder="Password *" class="form-input" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
          
          <input type="submit" class="form-button-signin" value="Login">
      </form>
    `;
    document.querySelector(".close-form-signin").onclick = () => {
      document.querySelector(".close-form-signin").style.display = "none";
      document.getElementsByClassName("signin-modal")[0].style.display = "none";
    }
    User.renderPostSignin();
  }

  static renderPostSignin() {
    document.getElementById('form-box-signin').onsubmit = function(e) {
    let configObj = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
            
      body: JSON.stringify({    
        user: {
          username: e.target['username'].value,
          password: e.target['password'].value
        }    
      })  
    };

    fetch(loginUrl, configObj) 
      .then((response) => response.json())
      .then((userData) => {
        User.currentUser = new User(userData['user']["data"]["attributes"]["email"], userData['user']["data"]["attributes"]["password"])
          localStorage.setItem('jwt_token', user_data.jwt)
          localStorage.setItem('user_id', User.currentUser.id)
          localStorage.setItem('last_name', User.email)
          localStorage.setItem('last_name', User.password)
      })
    }
    // debugger
    // User.displaySignedInUser();
  }

  static displaySignedInUser() {
    document.getElementsByClassName("nav-profile").onclick = () => {
      debugger
      User.renderSignedInUser();
      // document.getElementsByClassName("signup-modal")[0].style.display =
      //   "block";
    };
  }

  static renderSignedInUser() {
    document.getElementsByClassName("dropdown-content")[0].innerHTML = `
      <a id="test">Test</a>
      <a id="test">Test</a>
    `
  }

}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}