let obj_square = {
  width: 5,
  height: 5,
  color: function (counter) {
    if (counter === 1) {
      return "red";
    } else if (counter === 2) {
      return "orange";
    } else if (counter === 3) {
      return "yellow";
    } else if (counter === 4) {
      return "green";
    } else if (counter === 5) {
      return "blue";
    } else if (counter === 6) {
      return "indigo";
    } else if (counter === 7) {
      return "violet";
    }
  },
};

let counter = 1;
let square = "";
let container = document.querySelector(".Display");
let square_left = 0;
let square_top = 0;
let row_start = 1;
let row_end = 21;
let square_animation_delay = 0.3;
let line = 0;

for (let r = 1; r < 21; r++) {
  line = 0;
  for (let k = row_start; k < row_end; k++) {
    line += 1;
    square = `<div class="square-${k}" style="animation: Rainbow 10s infinite; animation-delay: ${
      square_animation_delay * (line + r) - 0.3
    }s; position: absolute; top: ${square_top}vh; left:${square_left}vw"></div>`;
    square_left += 5;
    container.innerHTML += square;
    color(k);
  }
  square_animation_delay = 0.3;
  square_top += 5;
  square_left = 0;
  row_start += 20;
  row_end += 20;
}

// for (let k = 1; k < 21; k++) {
//   square = `<div class="square-${k}" style="position: absolute; top: ${square_top}vh; left:${square_left}vw"></div>`;
//   square_left += 5;
//   container.innerHTML += square;
// }

// square_top += 25;
// square_left = 0;

// for (let k = 21; k < 41; k++) {
//   square = `<div class="square-${k}" style="position: absolute; top: ${square_top}vh; left:${square_left}vw"></div>`;
//   square_left += 5;
//   container.innerHTML += square;
// }

// square_top += 25;
// square_left = 0;

// for (let k = 41; k < 61; k++) {
//   square = `<div class="square-${k}" style="position: absolute; top: ${square_top}vh; left:${square_left}vw"></div>`;
//   square_left += 5;
//   container.innerHTML += square;
// }

// square_top += 25;
// square_left = 0;

// for (let k = 61; k < 81; k++) {
//   square = `<div class="square-${k}" style="position: absolute; top: ${square_top}vh; left:${square_left}vw"></div>`;
//   square_left += 5;
//   container.innerHTML += square;
// }

function color(i) {
  square = document.querySelector(`.square-${i}`);

  square.style.background = "red";
  square.style.width = `${obj_square.width}vw`;
  square.style.height = `${obj_square.height}vh`;
}

// function colorPicker(i) {
//   square = document.querySelector(`.square-${i}`);

//   square.style.background = obj_square.color(counter);
//   square.style.width = `${obj_square.width}vw`;
//   square.style.height = `${obj_square.height}vh`;

//   if (counter < 7) {
//     counter += 1;
//   } else if (counter === 7) {
//     counter = 1;
//   }
// }

// for (let i = 1; i < 81; i++) {
//   square = document.querySelector(`.square-${i}`);

//   square.style.background = obj_square.color(counter);
//   square.style.width = `${obj_square.width}vw`;
//   square.style.height = `${obj_square.height}vh`;

//   if (counter < 7) {
//     counter += 1;
//   } else if (counter === 7) {
//     counter = 1;
//   }
// }
