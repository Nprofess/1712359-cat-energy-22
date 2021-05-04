const exampleImgCat = document.querySelector(".example__img-cat");
const buttonBefore = document.querySelector(".toggle-control__button-before");
const buttonAfter = document.querySelector(".toggle-control__button-after");
const exampleImgCatBefore = document.querySelector(".example__img-cat--before");
const exampleImgCatAfter = document.querySelector(".example__img-cat--after");

// nav.classList.add("main-nav-closed");

buttonAfter.addEventListener("click", function (evt){
  if (nav.classList.contains("main-nav-closed")){
    evt.preventDefault();
    exampleImgCatAfter.classList.remove("example__img-cat--close");
    exampleImgCatBefore.classList.add("example__img-cat--close");
  }
});

buttonBefore.addEventListener("click", function (evt){
  if (nav.classList.contains("main-nav-closed")){
    evt.preventDefault();
    exampleImgCatBefore.classList.remove("example__img-cat--close");
    exampleImgCatAfter.classList.add("example__img-cat--close");
  }
});
