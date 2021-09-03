  search = document.getElementById("search")
  matchList = document.getElementById("match-list")

  // Search restaurants.json and filter it
  const searchRestaurants = async (searchText) => {
    const res = await fetch('http://localhost:3000/restaurants')
    const restaurants = await res.json()
    // Get matches to current text input
    let matches = restaurants.filter(restaurant => {
      const regex = new RegExp(`^${searchText}`, 'gi')
      return restaurant.name.match(regex) || restaurant.category.match(regex)
    })
    if (searchText.length === 0) {
      matches = []
      matchList.innerHTML = ``
    }
    ouputHTML(matches)
  }

  // Show results in HTML
  const ouputHTML = (matches) => {
    if (matches.length > 0) {
      const HTML = matches.map(match => `
        <div class="card card-body mb-1">
          <h4>${match.name}</h4>
        </div>
      `)
      .join('')

      matchList.innerHTML = HTML
    }
  }

  search.addEventListener('input', () => searchRestaurants(search.value))