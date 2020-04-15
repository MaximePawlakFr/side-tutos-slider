"use strict";
(function () {
  const cardsRow = document.querySelector(".cards");
  const cards = document.querySelectorAll(".card");
  console.log(cardsRow);
  console.log(cards.length);
  console.log(cardsRow.dataset.start);
  const start = parseInt(cardsRow.dataset.start);
  init(start);
  function init(start) {
    for (let i = 0; i < start; i++) {
      const card = cards[i];
      card.classList.add("hide-at-left");
    }
  }
  let index = start;
  window.move = (direction) => {
    console.log("Move ", direction);
    const moveClass = "move-" + direction;

    let nextIndex = index;
    if (direction === "left" && index < cards.length - 1) {
      nextIndex = index + 1;
      cards[index].classList.add("move-left");
    } else if (direction === "right" && index > 0) {
      nextIndex = index - 1;
      cards[nextIndex].classList.remove("hide-at-left");
      cards[nextIndex].classList.add("move-right");
    } else {
      return;
    }
    cards[nextIndex].classList.add("active");
    cards[index].classList.remove("active");

    setTimeout(() => {
      cards[nextIndex].classList.remove(moveClass);
      cards[index].classList.remove(moveClass);
      if (direction === "left") {
        cards[index].classList.add("hide-at-left");
      } else {
      }
      index = nextIndex;
    }, 1000);
  };
})();
