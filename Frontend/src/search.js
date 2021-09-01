
class Search {

  static search = document.getElementById("search")
  static matchList = document.getElementById("match-list")

  searchInput() {
    search.addEventListener('input', () => searchRestaurants(searchBar.value))
  }

  // Search restaurants.json and filter it
  searchRestaurants = async (searchText) => {
    const res = await fetch('http://localhost:3000/restaurants')
    const data = await res.json()
    console.log(data)
    debugger
    // Get matches to current text input
    let matches = restaurants.filter(restaurant => {
      const regex = new Regex(`^${searchText}`, 'gi')
      return restaurant.name.match(regex) || restaurant.category.match(regex)
    })
    if (searchText.length === 0) {
      matches = []
    }
    ouputHTML(matches)
  }

  // Show results in HTML
  ouputHTML = (matches) => {
    if (matches.length > 0) {
      const HTML = matches.map(match => `
        <div>
          <h4>${match.name}</h4>
        </div>
      `)
      .join('')

      matchList.innerHTML = HTML
    }
  }
}