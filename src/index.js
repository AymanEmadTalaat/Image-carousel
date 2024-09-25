/* Image carousel module pattern */
export const imageCarousel = (function () {
  /* Navigation circles references */
  const navCircles = document.querySelector(".nav-circles");
  const imgOne = document.getElementById("img1");
  const imgTwo = document.getElementById("img2");
  const imgThree = document.getElementById("img3");
  const imgFour = document.getElementById("img4");
  const imgFive = document.getElementById("img5");
  const imgSix = document.getElementById("img6");

  /* Obj with all imgs urls */
  const images = {
    imagesArr: [
      "url('https://plus.unsplash.com/premium_photo-1673481886897-64bfc9a4b81c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

      "url('https://images.unsplash.com/photo-1569388037243-dfa034ecdbca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

      "url('https://images.unsplash.com/photo-1495004197055-47db0f57d72d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

      "url('https://plus.unsplash.com/premium_photo-1700823214919-534b727a5bc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

      "url('https://images.unsplash.com/photo-1673924978031-f8d8d96cada4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

      "url('https://plus.unsplash.com/premium_photo-1672152804585-2b3d66c0f8cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    ],
  };

  let count = 0;

  /* The div element that has the background-img */
  const img = document.querySelector(".image");
  img.style.backgroundImage = `${images.imagesArr[count]}`;

  /* Change to the next img */
  function nextImg() {
    img.style.backgroundImage = `${images.imagesArr[count + 1]}`;
    count++;

    if (count > 5) {
      count = 0;
      img.style.backgroundImage = `${images.imagesArr[count]}`;
    }

    navCirclesFunc();
  }

  /* Change to the previous img */
  function previousImg() {
    if (count === 0) {
      count = 6;
      img.style.backgroundImage = `${images.imagesArr[count]}`;
    }

    img.style.backgroundImage = `${images.imagesArr[count - 1]}`;
    count--;

    navCirclesFunc();
  }

  /* Change the circles size when the target img appears */
  function navCirclesFunc() {
    if (count === 0) {
      imgOne.style.fontSize = "large";
      imgTwo.style.fontSize = "small";
      imgThree.style.fontSize = "small";
      imgFour.style.fontSize = "small";
      imgFive.style.fontSize = "small";
      imgSix.style.fontSize = "small";
    } else if (count === 1) {
      imgOne.style.fontSize = "small";
      imgTwo.style.fontSize = "large";
      imgThree.style.fontSize = "small";
      imgFour.style.fontSize = "small";
      imgFive.style.fontSize = "small";
      imgSix.style.fontSize = "small";
    } else if (count === 2) {
      imgOne.style.fontSize = "small";
      imgTwo.style.fontSize = "small";
      imgThree.style.fontSize = "large";
      imgFour.style.fontSize = "small";
      imgFive.style.fontSize = "small";
      imgSix.style.fontSize = "small";
    } else if (count === 3) {
      imgOne.style.fontSize = "small";
      imgTwo.style.fontSize = "small";
      imgThree.style.fontSize = "small";
      imgFour.style.fontSize = "large";
      imgFive.style.fontSize = "small";
      imgSix.style.fontSize = "small";
    } else if (count === 4) {
      imgOne.style.fontSize = "small";
      imgTwo.style.fontSize = "small";
      imgThree.style.fontSize = "small";
      imgFour.style.fontSize = "small";
      imgFive.style.fontSize = "large";
      imgSix.style.fontSize = "small";
    } else if (count === 5) {
      imgOne.style.fontSize = "small";
      imgTwo.style.fontSize = "small";
      imgThree.style.fontSize = "small";
      imgFour.style.fontSize = "small";
      imgFive.style.fontSize = "small";
      imgSix.style.fontSize = "large";
    }
  }

  /* change to the target img when clicking on the corresponding circle  */
  function navCirclesEvents() {
    imgOne.addEventListener("click", () => {
      img.style.backgroundImage = `${images.imagesArr[0]}`;
      imgOne.style.fontSize = "large";
      imgTwo.style.fontSize = "small";
      imgThree.style.fontSize = "small";
      imgFour.style.fontSize = "small";
      imgFive.style.fontSize = "small";
      imgSix.style.fontSize = "small";
    });

    imgTwo.addEventListener("click", () => {
      img.style.backgroundImage = `${images.imagesArr[1]}`;
      imgOne.style.fontSize = "small";
      imgTwo.style.fontSize = "large";
      imgThree.style.fontSize = "small";
      imgFour.style.fontSize = "small";
      imgFive.style.fontSize = "small";
      imgSix.style.fontSize = "small";
    });

    imgThree.addEventListener("click", () => {
      img.style.backgroundImage = `${images.imagesArr[2]}`;
      imgOne.style.fontSize = "small";
      imgTwo.style.fontSize = "small";
      imgThree.style.fontSize = "large";
      imgFour.style.fontSize = "small";
      imgFive.style.fontSize = "small";
      imgSix.style.fontSize = "small";
    });

    imgFour.addEventListener("click", () => {
      img.style.backgroundImage = `${images.imagesArr[3]}`;
      imgOne.style.fontSize = "small";
      imgTwo.style.fontSize = "small";
      imgThree.style.fontSize = "small";
      imgFour.style.fontSize = "large";
      imgFive.style.fontSize = "small";
      imgSix.style.fontSize = "small";
    });

    imgFive.addEventListener("click", () => {
      img.style.backgroundImage = `${images.imagesArr[4]}`;
      imgOne.style.fontSize = "small";
      imgTwo.style.fontSize = "small";
      imgThree.style.fontSize = "small";
      imgFour.style.fontSize = "small";
      imgFive.style.fontSize = "large";
      imgSix.style.fontSize = "small";
    });

    imgSix.addEventListener("click", () => {
      img.style.backgroundImage = `${images.imagesArr[5]}`;
      imgOne.style.fontSize = "small";
      imgTwo.style.fontSize = "small";
      imgThree.style.fontSize = "small";
      imgFour.style.fontSize = "small";
      imgFive.style.fontSize = "small";
      imgSix.style.fontSize = "large";
    });
  }

  return { nextImg, previousImg, navCirclesFunc, navCirclesEvents };
})();
