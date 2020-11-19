const menuUrl = "http://localhost:3000/menus";
class Menu {
  constructor(
    appetizers,
    entrees,
    desserts,
    drinks,
    description
  ) {
    this.appetizers = appetizers,
    this.entrees = entrees,
    this.desserts = desserts,
    this.drinks = drinks
    this.description = description
  }

  renderMenu() {
    document.getElementById("category").innerHTML += `
      <article class="menu">
        <div class="appetizer_menu">
          <h3>Appetizers</h1>
          <dl>
            <dt>${this.appetizer[0]}</dt>
              <dd>${this.description[0]}</dd>
            <dt>${this.appetizer[1]}</dt>
              <dd>${this.description[1]}</dd>
          </dl>
        </div>
        <div class="entree_menu">
          <h3>Entrees</h3>
            <dt>${this.entree[0]}</dt>
              <dd>${this.description[2]}</dd>
            <dt>${this.entree[1]}</dt>
              <dd>${this.description[3]}</dd>
          </dl>
        </div>
        <div class="dessert_menu">
          <h3>Desserts</h3>
            <dt>${this.dessert[0]}</dt>
              <dd>${this.description[4]}</dd>
            <dt>${this.dessert[1]}</dt>
              <dd>${this.description[5]}</dd>
          </dl>
        </div>
        <div class="drink_menu">
          <h3>Drinks</h3>
            <dt>${this.drink[0]}</dt>
              <dd>${this.description[6]}</dd>
            <dt>${this.drink[1]}</dt>
              <dd>${this.description[7]}</dd>
          </dl>
        </div>
      </article>
    `
  }

  static fetchMenus() {
    fetch(menuUrl)
      .then((response) => response.json())
      .then((menuData) => {
        for (const menu of menuData) {
          let newMenu = new Menu(
            menu["id"],
            menu["appetizer"],
            menu["entree"],
            menu["dessert"],
            menu["drink"],
            menu["description"]
          );
          newMenu.renderMenu();
          Menu.instances.push(newMenu);
        }
        Menu.addMenuModal();
        Menu.createMenu();
      });
  }
}