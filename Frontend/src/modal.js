document.getElementById("button").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});

window.onload = function () {
  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";
  });
};
