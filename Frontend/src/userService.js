const autoUrl = "http://localhost:3000/auto_login"
let token = localStorage.getItem("token")

async function checkAuth() {
    const resp = await fetch(autoUrl, {
      headers: {
          Authorization: `Bearer ${token}`
        }
      })
    if (resp.status >= 200 && resp.status <= 299) {
      const data = await resp.json()
      console.log(data, "success")
    } else {
      console.log(resp.status, resp.statusText);
    }
  }