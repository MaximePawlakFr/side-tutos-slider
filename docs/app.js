"use strict";

(function () {
  console.log("Start");

  // Select all cards
  const cards = document.querySelectorAll(".card");
  console.log(cards);

  // Index of active card
  let index = 2;
  cards[index].classList.add("active");

  // Hide all cards before the active one,
  for (let i = 0; i < index; i++) {
    cards[i].classList.add("hideLeft");
  }

  // Init nextIndex: when sliding, it will be the next to be active
  let nextIndex = null;

  // Slide is triggered when clicking on the buttons
  window.slide = (direction) => {
    console.log("slide", direction);

    // Setup nextIndex according to direction
    if (index < cards.length - 1 && direction === "left") {
      nextIndex = index + 1;
    } else if (index > 0 && direction === "right") {
      nextIndex = index - 1;
    } else {
      // Stop now and return if out of bounds.
      console.log("Out of bounds.");
      return;
    }

    // Set nextActive class
    cards[nextIndex].classList.add("nextActive");

    // Add sliding class to the active and nextActive cards
    cards[index].classList.add("sliding-" + direction);
    cards[nextIndex].classList.add("sliding-" + direction);

    // At the end of animation, reset some parameters.
    window.setTimeout(() => {
      if (direction === "left") {
        // The active card is now on the left and must be hidden
        cards[index].classList.add("hideLeft");
      } else if (direction === "right") {
        // The card on the left is now active and must be visible
        cards[nextIndex].classList.remove("hideLeft");
      }

      // Animation is over. Remove sliding class.
      cards[index].classList.remove("sliding-" + direction);
      cards[nextIndex].classList.remove("sliding-" + direction);

      // Animation is over. Remove nextActive class.
      cards[nextIndex].classList.remove("nextActive");
      
      // The nextActive card becomes active
      cards[nextIndex].classList.add("active");
      // The active card is no longer active
      cards[index].classList.remove("active");

      // Update index
      index = nextIndex;
    }, 1000);
  };
})();
