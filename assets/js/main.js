/*OVERLAY*/
gsap.to(".first", 1.5, { delay: 0.5, top: "-100%", ease: Expo.easeInOut });
gsap.to(".second", 1.5, { delay: 0.7, top: "-100%", ease: Expo.easeInOut });
gsap.to(".third", 1.5, { delay: 0.9, top: "-100%", ease: Expo.easeInOut });

/***SCROLL ANIMATION */
function fadeOut() {
  TweenMax.to(".myBtn", 1, {
    y: -100,
    opacity: 0,
  });

  TweenMax.to(".screen", 2, {
    y: -400,
    opacity: 0,
    ease: Power2.easeInOut,
    delay: 2,
  });

  TweenMax.from(".overlay__home", 2, {
    ease: Power2.easeInOut,
  });

  TweenMax.to(".overlay__home", 2, {
    delay: 2.6,
    top: "-100%",
    ease: Expo.easeInOut,
  });

  TweenMax.to(".overlay__home2", 2, {
    delay: 3,
    top: "-100%",
    ease: Expo.easeInOut,
  });

  const body = document.querySelector("body");
  body.style.overflowY = "auto";
  body.style.overflowX = 'hidden'
}

/*CHANFE THEME (DARK Y LIGHT MODE) */
const rootElement = document.documentElement;
function theme() {
  const innerButon = document.querySelector(".radio__inner");
  innerButon.classList.toggle("active");

  const lightTheme = {
    "--first-color": "hsl(260, 94%, 32%)",
    "--title-color": "black",
    "--text-color": "hsl(0, 1%, 67%)",
    "--body-color": "hsl(273, 100%, 99%)",
    "--shadown-color": " black",
    "--fixed-color": "gray",
    /*========== Font and typography ==========*/
    " --body-font": "'Poppins', sans-serif",
    "--style-font": "'Dancing Script', cursive",
    "--title-font-size": "6vw",
    "--title-font-size--sm": "40px",
    "--text-font-size": "16px",
    "--small-font-size": "10px",
    /*========== ICONS SIZE Y COLOR =======*/
    "--icon-size": "20px",
    "--icon-color": "rgb(0, 0, 0)",
    /*========== TRANSITION ========*/
    "--transition-hover": "0.4s",
    //============ SIZE AND COLOR QUERIES==========//@at-root
    " --title-font-size-q": "25px",
    "--text-font-size-q": "14px",
    "--small-font-size-q": "8px",
  };
  const darkTheme = {
    "--first-color": "hsl(260, 94%, 32%)",
    "--title-color": "white",
    "--text-color": "hsl(0, 1%, 67%)",
    "--body-color": "black",
    "--shadown-color": " white",
    "--fixed-color": "gray",
    /*========== Font and typography ==========*/
    " --body-font": "'Poppins', sans-serif",
    "--style-font": "'Dancing Script', cursive",
    "--title-font-size": "6vw",
    "--title-font-size--sm": "40px",
    "--text-font-size": "16px",
    "--small-font-size": "10px",
    /*========== ICONS SIZE Y COLOR =======*/
    "--icon-size": "20px",
    "--icon-color": "rgb(0, 0, 0)",
    /*========== TRANSITION ========*/
    "--transition-hover": "0.4s",
    //============ SIZE AND COLOR QUERIES==========//@at-root
    " --title-font-size-q": "25px",
    "--text-font-size-q": "14px",
    "--small-font-size-q": "8px",
  };

  if (innerButon.classList.contains("active")) {
    //will detect if button container className equal "Active"
    changeTheme(darkTheme);
  } else {
    changeTheme(lightTheme);
  }
}
function changeTheme(theme) {
  for (let prop in theme) {
    changeProperty(prop, theme[prop]);
  }
}

function changeProperty(property, value) {
  rootElement.style.setProperty(property, value);
}
//==========MENU=============//
const menuContainer = document.querySelector('.container__menu')
function menu(){
  menuContainer.classList.toggle('active')
}

/*===HOVER ICONS PERFIL=======*/
const iconsOne = document.querySelector(".html"),
  iconsTwo = document.querySelector(".react"),
  iconsTree = document.querySelector(".css"),
  iconsFour = document.querySelector(".js"),
  iconsFive = document.querySelector(".git");

function hoverIcon() {
  iconsOne.classList.toggle("active");
  iconsTwo.classList.toggle("active");
  iconsTree.classList.toggle("active");
  iconsFour.classList.toggle("active");
  iconsFive.classList.toggle("active");
}
/**============ANIMATION APPEAR======== */
const target = document.querySelectorAll("[data-animate]");
const animateClass = "animation";

function Scrool() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 5;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animateClass);
    }
  });
}
window.addEventListener("scroll", function () {
  Scrool();
});
