"use strict";
// fixing safari flex gap
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();


thumbnails.forEach(function (thumb, idx) {
  thumb.addEventListener("click", function () {
    removeThumbNailActive();
    removeSlide();
    thumb.classList.add("thumbnail-active");
    images[idx].classList.add("slide");
  });
});
// 
closeBtn.addEventListener("click", function () {
  overlayContainer.classList.remove("active");
  overAllOverlay.classList.remove("active");
});

leftArrow.addEventListener("click", function () {
  if (activeSlide > 0) {
    activeSlide--;
  } else {
    activeSlide = 0;
  }
  removeImgActive();
  removeOverlayThumb();
  overlayThumbnails[activeSlide].classList.add("thumbnail-active");
});
function removeOverlayThumb() {
  overlayThumbnails.forEach(function (thumb) {
    thumb.classList.remove("thumbnail-active");
  });
}

// efeito de foco cart-container

function generateEvent(e) {
  if (Number(cartNumberOfItems.textContent > 0)) {
    filled.classList.toggle("showCart");
    empty.classList.remove("showCart");
  } else {
    empty.classList.toggle("showCart");
    filled.classList.remove("showCart");
  }
}
function degenerateEvent() {
  empty.classList.remove("showCart");
  filled.classList.remove("showCart");
}
// efeito de clique
cartShow.addEventListener("click", function (e) {
  generateEvent();
  // cartShow.removeEventListener("mouseenter", generateEvent);
  // cartShow.removeEventListener("mouseleave", degenerateEvent);
});
// cartShow.addEventListener("mouseenter", generateEvent);

// cartShow.addEventListener("mouseleave", degenerateEvent);

// close cart container on click somewhere outside  container
window.addEventListener("click", function (e) {
  const click = e.target.closest(".cart-container");
  const cartBtn = e.target.closest(".cart--show");
  const subScript = e.target.closest(".cartContainer");

  if (click || cartBtn) {
    false;
  } else {
    filled.classList.remove("showCart");
    empty.classList.remove("showCart");
  }
});
// lista de navegação principal altera classe ativa

const navigationBtn = document.querySelectorAll(".main-navigation-link");

navigationBtn.forEach(function (btn, idx) {
  btn.addEventListener("click", function () {
    removeActiveBtn();
    btn.classList.add("nav-active");
  });
});

function removeActiveBtn() {
  navigationBtn.forEach(function (navLink) {
    navLink.classList.remove("nav-active");
  });
}
// navegação móvel
const barBtn = document.querySelector(".open");
const closBtn = document.querySelector(".close");
const buttons = document.querySelector(".navigation-btn");
const openNavigation = document.querySelector(".main-navigation");
const menuBtn = document.querySelectorAll(".menu-btn");
const logoBar = document.querySelector(".logo--bars");
const innerLogo = document.querySelector(".logo--inner");
const logo = document.querySelector(".logo");

barBtn.addEventListener("click", function () {
  openNavigation.classList.add("active");
  logoBar.classList.add("hidden");
  closBtn.style.display = "block";
  innerLogo.style.display = "none";
});
closBtn.addEventListener("click", function () {
  openNavigation.classList.remove("active");
  logoBar.classList.remove("hidden");
  closBtn.style.display = "none";
  innerLogo.style.display = "block";
});
// para remover a tela do celular