const signupUrl = "http://localhost:3000/signup";
const loginUrl = "http://localhost:3000/login";
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
    document.getElementById("form-button-signup").onclick = () => {
      User.renderNewUser();
      document.getElementsByClassName("signup-modal")[0].style.display =
        "block";
    };
  }

  static renderNewUser() {
    document.getElementsByClassName("signup-form")[0].innerHTML = `
      <form class="form-box" id="form-box">
        <div class="close-form">&times;</div>
        <h2 class="form-title">Welcome, sign up below!</h2>

          <input type="text" name="first_name" placeholder="First Name *" class="form-input" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">

          <input type="text" name="last_name" placeholder="Last Name *" class="form-input">

          <input type="email" name="email" placeholder="Enter Email *" class="form-input">

          <input type="password" name="password" placeholder="Password *" class="form-input" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
          
          <input type="submit" class="form-button" value="Create Account">
      </form>
    `;
    document.querySelector(".close-form").onclick = () => {
      document.querySelector(".close-form").style.display = "none";
      document.getElementsByClassName("signup-modal")[0].style.display = "none";
    }
    User.renderPostSignup();
  }

  static renderPostSignup() {
    document.getElementById('form-box').onsubmit = function(e) {
    let configObj = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
            
      body: JSON.stringify({    
        user: {
          first_name: e.target['first_name'].value,
          last_name: e.target['last_name'].value,
          email: e.target['email'].value,
          password: e.target['password'].value
        }    
      })
    };

    fetch(signupUrl, configObj) 
      .then((response) => response.json())
      .then((userData) => {
        let newSignup = new Signup(
          userData['data']['id'], 
          userData['data']['attributes']['first_name'], 
          userData['data']['attributes']['last_name'], 
          userData['data']['attributes']['email'],
          userData['data']['attributes']['password']
        )
        User.instances.push(newSignup)
      })
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

          <input type="email" name="email" placeholder="Enter Email *" class="form-input">

          <input type="password" name="password" placeholder="Password *" class="form-input" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
          
          <input type="submit" class="form-button-signin" value="Create Account">
      </form>
    `;
    document.querySelector(".close-form-signin").onclick = () => {
      document.querySelector(".close-form-signin").style.display = "none";
      document.getElementsByClassName("signin-modal")[0].style.display = "none";
    }
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
          email: e.target['email'].value,
          password: e.target['password'].value
        }    
      })
    };

    fetch(signinUrl, configObj) 
      .then((response) => response.json())
      .then((userData) => {
        let newSignin = new Signin(
          userData['data']['attributes']['email'],
          userData['data']['attributes']['password']
        )
        User.instances.push(newSignin)
      })
    }
  }

}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}