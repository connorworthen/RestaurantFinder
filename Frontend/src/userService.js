  async function checkToken() {
    try {
      let id = localStorage.getItem("id")
      
      const resp = await fetch(`${this.endpoint}/users/${id}`)
      const data = await resp.json()

      console.log(data, "success")
    } catch(e) {
      console.log(e, "Error")
    }
    debugger
  }