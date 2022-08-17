const perfumeImg = document.querySelector(".image--wrapper img");

document.addEventListener("DOMContentLoaded", resizeImage);
window.addEventListener("resize", resizeImage);

function resizeImage() {
  if (window.innerWidth >= 750) {
    perfumeImg.src = "./images/image-product-desktop.jpg";
  } else {
    perfumeImg.src = "./images/image-product-mobile.jpg";
  }
}
