const searchBox =document.querySelector(".search-box");
const navBtnContainer = document.querySelector(".nav-bth-container");
const searchButton =  document.querySelector("search-btn");
const closeButton = document.querySelector(".close-btn");

searchButton.addEventListener("click",function () {
    searchBox.classList.add("active");
    navBtnContainer.classList.add("active");
});

closeButton.addEventListener("click",function () {
    searchBox.classList.remove("active");
    navBtnContainer.classList.remove("active");
});