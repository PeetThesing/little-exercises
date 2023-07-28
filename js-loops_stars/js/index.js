console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let star = 1; star <= 5; star++) {
    console.log(star);
    let img = document.createElement("img");
    img.src = "assets/star-empty.svg";
    starContainer.append(img);

    const filledStars = 1;
  }

  //--^-- your code here --^--
}

renderStars();
