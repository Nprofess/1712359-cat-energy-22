const buttonToggleMenu = document.querySelector(".page-header__toggle-menu");
const buttonToggleMenuClosed = document.querySelector(".page-header__toggle-menu-closed");
const navClosed = document.querySelector(".main-nav-closed");
const nav = document.querySelector(".main-nav");


nav.classList.add("main-nav-closed");

buttonToggleMenu.addEventListener("click", function (evt){
  if (nav.classList.contains("main-nav-closed")){
    evt.preventDefault();
    nav.classList.remove("main-nav-closed");
    buttonToggleMenu.classList.add("buttonToggleMenuClosed");
  }
  else{
    nav.classList.add("main-nav-closed");
  }

  if(!buttonToggleMenu.classList.contains("page-header__toggle-menu-closed")){
    evt.preventDefault();
    buttonToggleMenu.classList.add("page-header__toggle-menu-closed");
  } else{
    buttonToggleMenu.classList.remove("page-header__toggle-menu-closed");
  }
});
