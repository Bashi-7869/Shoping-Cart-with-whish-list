const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[content]");
button = document.querySelectorAll("[content] .close");
let body = document.querySelector("body");

tabs.forEach((tab) =>{
  tab.addEventListener("click",()=>{
    body.classList.toggle("active-tab");
    const target = document.querySelector(tab.dataset.target);
    // console.log(target)
    tabContent.forEach((content) => {
      content.classList.remove("active-tab");
    });
    target.classList.add("active-tab");
    
  });  
});

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    body.classList.toggle("active-tab");
  });
 });