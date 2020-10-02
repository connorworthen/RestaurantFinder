const list = document.querySelector(".list");

const sort_name_btn = document.querySelector(".sort-options .sort-name");
const sort_meta_btn = document.querySelector(".sort-options .sort-meta");
const sort_age_btn = document.querySelector(".sort-options .sort-age");

let list_items = [
  {
    name: "test1",
    meta: "red",
    age: "25",
  },

  {
    name: "test2",
    meta: "blue",
    age: "43",
  },

  {
    name: "test3",
    meta: "purple",
    age: "65",
  },
];

function displayList(array = []) {
  list.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    let item_element = document.createElement("div");
    item_element.classList.add("list-item");

    let title = document.createElement("div");
    item_element.classList.add("item-title");
    title.innerText = item.name;

    item_element.appendChild(title);

    list.appendChild(item_element);
  }
}
displayList(list_items);
