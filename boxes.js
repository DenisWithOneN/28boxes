const nrBoxes = 28;
let columns = 7;
let rows = 4;
const distanceX = 10;
const distanceY = 15;

function initBoxes() {
  for (let i = 0; i < columns; i++)
    for (let j = 0; j < rows; j++) {
      let box = {
        x: columns * i * distanceX + 20,
        y: rows * j * distanceY + 20,
        size: 50,
        color: color(random(255), random(255), random(255)),
      };
      boxes.push(box);
    }
}

function createBox() {
  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    fill(box.color);
    square(box.x, box.y, box.size);
    textAlign(CENTER, CENTER);
    textSize(20);
    fill("#000000");
    text(i+1, box.x + box.size / 2, box.y + box.size / 2);
  }
}
