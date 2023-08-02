console.clear();
console.log("Hello my dear");

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let star = 1; star <= 5; star++) {
    console.log(star);
    const img = document.createElement("img");
    img.src = "assets/star-empty.svg";
    starContainer.append(img);
  }
  //--^-- your code here --^--
}
star.addEventListener;

renderStars();

//LÖSUNG ROLAND
// const starContainer = document.querySelector('[data-js="star-container"]');

// function renderStars(filledStars) {
//   // reset the star container before rerendering stars
//   starContainer.innerHTML = "";

//   //--v-- your code here --v--

//   for (let counter = 1; counter <= 5; counter++) {
//     const starImage = document.createElement("img");
//     if (counter <= filledStars) {
//       starImage.src = "assets/star-filled.svg";
//     } else {
//       starImage.src = "assets/star-empty.svg";
//     }
//     starImage.addEventListener("click", () => {
//       let filledStars = counter;
//       renderStars(filledStars);
//     });
//     starContainer.append(starImage);
//   }
//   //--^-- your code here --^--
// }

// renderStars();
