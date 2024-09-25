import "./style.css";
import { imageCarousel } from "./index.js";

const nextBtn = document.querySelector(".btn2");
const previousBtn = document.querySelector(".btn1");

/* Change the img when nextBtn is clicked */
nextBtn.addEventListener("click", imageCarousel.nextImg);

/* Change the img every 10s */
setInterval(imageCarousel.nextImg, 10000);

/* Change the img when previousBtn is clicked */
previousBtn.addEventListener("click", imageCarousel.previousImg);

/* change to the target img when clicking on the corresponding circle  */
imageCarousel.navCirclesEvents();
