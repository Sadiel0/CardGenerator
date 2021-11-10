/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  CardGenerator();
  console.log("Hello Rigo from the console!");
};

let CardGenerator = () => {
  let cardNumbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "J",
    "A"
  ];
  let cardSuits = ["♥", "♠", "♣", "♦"];
  let randomCardNumber =
    cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  let randomCardSuits = cardSuits[Math.floor(Math.random() * cardSuits.length)];
  let firstSpade = document.querySelector(".first-spade");
  firstSpade.innerHTML = randomCardSuits;
  let secondSpade = document.querySelector(".second-spade");
  secondSpade.innerHTML = randomCardSuits;
  let number = document.querySelector(".mid");
  number.innerHTML = randomCardNumber;

  if (randomCardSuits === "♥" || randomCardSuits === "♦") {
    firstSpade.style.color = "red";
    secondSpade.style.color = "red";
  }
};
