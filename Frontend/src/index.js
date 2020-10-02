document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content has loaded");
  let url = "http://localhost:3000/restaurants";
  fetch(url)
    .then((resp) => resp.json())
    .then((data) =>
      data.forEach((restaurant) => {
        displayRow(restaurant);
      })
    );
});

function displayRow(row) {
  const table = document.querySelector(".modal-body");
  table.innerHTML += `
      <table>
            <tr>
              <th>${row.name}</th>
              <th>${row.category}</th>
            </tr>

          </table>
  `;
}

// function myFunction() {
//   // Declare variables
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");

//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }

// document.getElementById("button").addEventListener("click", function () {
//   document.querySelector(".bg-modal").style.display = "flex";
// });

// document.querySelector(`.close`).addEventListener("click", function () {
//   document.querySelector(`.bg-modal`).style.display = "none";
// });

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
