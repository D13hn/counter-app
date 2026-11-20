let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");
let count = document.querySelector(".count span");

let counter = 0;

function update() {
  count.textContent = counter;
}

plus.addEventListener("click", function () {
  counter++;
  update();
});

minus.addEventListener("click", function () {
  counter--;
  update();
});

reset.addEventListener("click", function () {
  counter = 0;
  update();
});
