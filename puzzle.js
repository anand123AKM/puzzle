var rows = 3;
var columns = 3;
var currTile;
var otherTile;
var turns = 0;
var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
imgOrder.reverse();

window.onload = function () {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.src = "blank.png";

      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragEnd", dragEnd);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("drop", drop);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);

      tile.addEventListener("touchstart", dragStart);
      tile.addEventListener("touchend", dragEnd);
      tile.addEventListener("touchmove", dragOver);
      tile.addEventListener("touchcancel", dragLeave);

      document.getElementById("board").append(tile);
    }
  }
  for (let a = 0; a < imgOrder.length; a++) {
    let x = Math.floor(Math.random() * imgOrder.length);
    let temp = imgOrder[a];
    imgOrder[a] = imgOrder[x];
    imgOrder[x] = temp;
  }

  for (let a = 0; a < imgOrder.length; a++) {
    let tiles = document.createElement("img");
    tiles.src = imgOrder[a] + ".jpg";

    tiles.addEventListener("dragstart", dragStart);
    tiles.addEventListener("dragend", dragEnd);
    tiles.addEventListener("dragover", dragOver);
    tiles.addEventListener("drop", drop);
    tiles.addEventListener("dragenter", dragEnter);
    tiles.addEventListener("dragleave", dragLeave);

    tiles.addEventListener("touchstart", dragStart);
    tiles.addEventListener("touchend", dragEnd);
    tiles.addEventListener("touchmove", dragOver);
    tiles.addEventListener("touchcancel", dragLeave);

    document.getElementById("pieces").append(tiles);
  }
};

function dragStart() {
  currTile = this;
}

function dragEnd() {
  currTile = null;
}

function dragOver(e) {
  e.preventDefault();
}

function drop() {
  otherTile = this;
  if (currTile.src.includes("blank.png")) {
    return;
  }
  if (otherTile.src.includes("blank.png")) {
    otherTile.src = currTile.src;
    currTile.src = "blank.png";
    turns += 1;
    document.getElementById("turns").innerText = turns;
  }
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave(e) {
  e.preventDefault();
}
