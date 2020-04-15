"use strict";

(function () {
  console.log("Start");
  const cards = document.querySelectorAll(".card");
  console.log(cards);
  let index = 2;
  let nextIndex = null;
  cards[index].classList.add("active");
  for (let i = 0; i < index; i++) {
    cards[i].classList.add("hideLeft");
  }
  window.slide = (direction) => {
    console.log("slide", direction);

    if (index < cards.length - 1 && direction === "left") {
      nextIndex = index + 1;
    } else if (index > 0 && direction === "right") {
      nextIndex = index - 1;
    } else {
      console.log("Out of bounds.");
      return;
    }
    cards[nextIndex].classList.add("nextActive");
    cards[index].classList.add("sliding-" + direction);
    cards[nextIndex].classList.add("sliding-" + direction);

    window.setTimeout(() => {
      if (direction === "left") {
        cards[index].classList.add("hideLeft");
      } else if (direction === "right") {
        cards[nextIndex].classList.remove("hideLeft");
      }

      cards[index].classList.remove("sliding-" + direction);
      cards[nextIndex].classList.remove("sliding-" + direction);

      cards[nextIndex].classList.remove("nextActive");
      cards[nextIndex].classList.add("active");

      cards[index].classList.remove("active");

      index = nextIndex;
    }, 1000);
  };
})();
