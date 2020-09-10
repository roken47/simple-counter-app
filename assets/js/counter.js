let decrement = document.querySelector("#decrement");
let increment = document.querySelector("#increment");
let counter = document.querySelector("#count");

let stringCount = prompt("Give me a random number!");
let count = Number(stringCount);
counter.innerHTML = count;

decrement.addEventListener("click", function () {
  count--;
  counter.innerHTML = count;
  counter.style.color = "black";
});

increment.addEventListener("click", function () {
  count++;
  counter.innerHTML = count;
  counter.style.color = "black";
  if (count >= 10) {
    counter.style.color = "red";
  }
});
