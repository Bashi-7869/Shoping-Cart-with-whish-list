let iconCart = document.querySelector(".icon-wishlish");
let closebtn = document.querySelector(".tab-item .close");
let body = document.querySelector("body");

iconCart.addEventListener("click", () => {
  body.classList.toggle("active-tab");
});
closebtn.addEventListener("click", () => {
  body.classList.toggle("active-tab");
});

const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[content]"),
  button = document.querySelector("[content] .close");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    // console.log(target);
    tabContent.forEach((content) => {
      content.classList.remove("active-tab");
    });
    target.classList.add("active-tab");
  });
});
