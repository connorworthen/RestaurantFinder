// import {Restaurant} from './restaurant.js';
const signupUrl = "http://localhost:3000/signup";
const loginUrl = "http://localhost:3000/login";

class User {
  constructor(username, password, id) {
    this.username = username
    this.password = password
    this.id = id
  }

// Signup Start

  // renderBttns() {
  //   document.getElementById("signin-bttn").innerHTML = `
  //     <button type="button" class="btn btn-primary">Primary</button>
  //   `
  // }

  renderNewUser() {
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
        User.currentUser = new User(userData['user']["data"]["attributes"]["username"], userData['user']["data"]['id'])
          localStorage.setItem('jwt_token', userData.jwt)
          localStorage.setItem('user_id', User.currentUser.id)
          localStorage.setItem('username', User.username)
      })
      document.getElementsByClassName("signup-modal")[0].style.display = "none";
      document.getElementById("form-button-signup").style.visibility = 'hidden';
      document.getElementById("form-button-signin").style.visibility = 'hidden';
      document.getElementById("form-button-profile").style.visibility = 'visible';
      document.getElementById("form-button-logout").style.visibility = 'visible';
  }

  static createUser() {
    document.getElementById("form-button-signup").onclick = () => {
      User.renderNewUser();
      User.signupFormHandler();
      document.getElementsByClassName("signup-modal")[0].style.display = "block";
    };
  }

  static signupFormHandler() {
    document.getElementById("form-box").onsubmit = (e) => {
      e.preventDefault()
      User.renderPostSignup(e.target['username'].value, e.target['password'].value)
        return false
    }
  }

// Login Start 

  static renderCurrentUser() {
    document.getElementsByClassName("signin-form")[0].innerHTML = `
      <form class="form-box-signin" id="form-box-signin">
        <div class="close-form-signin">&times;</div>
        <h2 class="form-title-signin">Welcome back! Sign in below</h2>

          <input type="username" id="login_username" placeholder="Username *" class="form-input" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">

          <input type="password" id="login_password" placeholder="Password *" class="form-input" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
          
          <input type="submit" class="form-button-signin" value="Login">
      </form>
    `;
    document.querySelector(".close-form-signin").onclick = () => {
      document.querySelector(".close-form-signin").style.display = "none";
      document.getElementsByClassName("signin-modal")[0].style.display = "none";
    }
  }

  static renderPostSignin(username, password) {
  
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

    fetch(loginUrl, configObj) 
      .then((response) => response.json())
      .then((loginData) => {
        User.currentUser = new User(loginData['user']["data"]["attributes"]["username"], loginData['user']["data"]['id'])
          localStorage.setItem('jwt_token', loginData.jwt)
          localStorage.setItem('user_id', User.currentUser.id)
          localStorage.setItem('username', User.currentUser.username)
      })
      document.getElementsByClassName("signin-modal")[0].style.display = "none";
      document.getElementById("form-button-signup").style.visibility = 'hidden';
      document.getElementById("form-button-signin").style.visibility = 'hidden';
      document.getElementById("form-button-profile").style.visibility = 'visible';
      document.getElementById("form-button-logout").style.visibility = 'visible';
  }

  static signinUser() {
    document.getElementById("form-button-signin").onclick = () => {
      User.renderCurrentUser();
      User.signinFormHandler();
      document.getElementsByClassName("signin-modal")[0].style.display =
        "block";
    };
  }

  static signinFormHandler() {
    document.getElementById("form-box-signin").onsubmit = (e) => {
      e.preventDefault()
      User.renderPostSignin(e.target['login_username'].value, e.target['login_password'].value)
        return false
    }
  }
// Login end

// logout start
  static logoutUser() {
    document.getElementById("form-button-logout").onclick = () =>  {
      localStorage.removeItem('jwt_token')
      localStorage.removeItem('user_id')
      localStorage.removeItem('username')
      localStorage.removeItem('password')
      User.currentUser = undefined
      document.getElementById("form-button-signup").style.visibility = 'visible';
      document.getElementById("form-button-signin").style.visibility = 'visible';
      document.getElementById("form-button-profile").style.visibility = 'hidden';
      document.getElementById("form-button-logout").style.visibility = 'hidden';
    }
  }
// logout end

  static renderFavorites() {
    document.getElementsByClassName("profile-form")[0].innerHTML = `
      <form class="form-box-profile" id="form-box-profile">
        <div class="close-form-profile">&times;</div>
        <h2 class="form-title-profile">${User.currentUser.username}'s Favorites</h2>
        <h4>${User.currentUser.favorites}</h4>
      </form>
    `;
    document.querySelector(".close-form-profile").onclick = () => {
      document.querySelector(".close-form-profile").style.display = "none";
      document.getElementsByClassName("profile-modal")[0].style.display = "none";
    }
  }

  static userFavorites() {
    document.getElementById("form-button-profile").onclick = () => {
      User.renderFavorites();
      document.getElementsByClassName("profile-modal")[0].style.display = "block";
    };
  }

}

// User Class end

// nav functions
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}