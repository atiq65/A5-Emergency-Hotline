let heartCount = 0;
const heartCountElement = document.getElementById("nav-heart-icon");
const allHeartIcons = document.querySelectorAll(".card-heart-icon");

for (let i = 0; i < allHeartIcons.length; i++) {
  allHeartIcons[i].addEventListener("click", function () {
    heartCount++;
    heartCountElement.textContent = heartCount;
  });
}
