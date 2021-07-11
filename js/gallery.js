const images = document.querySelectorAll(".img__gallery");
const imagesL = document.querySelector(".add__image");
const lContainer = document.querySelector(".image__light");
const imagesArray = Array.from(images);

imagesArray.forEach((image) => {
  image.addEventListener("click", () => {
    showImg(image.getAttribute("src"));
  });
});

lContainer.addEventListener("click", (e) => {
  if (e.target !== imagesL) {
    lContainer.classList.toggle("show");
    imagesL.classList.toggle("show__image");
  }
});

const showImg = (image) => {
  imagesL.src = image;
  lContainer.classList.toggle("show");
  imagesL.classList.toggle("show__image");
};
