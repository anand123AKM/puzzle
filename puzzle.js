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
      tile.addEventListener("dragend", dragEnd);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("drop", drop);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);

      tile.addEventListener("touchstart", touchStart);
      tile.addEventListener("touchend", touchEnd);
      tile.addEventListener("touchmove", touchMove);
      tile.addEventListener("touchcancel", touchCancel);

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

    tiles.addEventListener("touchstart", touchStart);
    tiles.addEventListener("touchend", touchEnd);
    tiles.addEventListener("touchmove", touchMove);
    tiles.addEventListener("touchcancel", touchCancel);

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

function touchStart(e) {
  currTile = this;
  e.preventDefault();
}

function touchEnd(e) {
  currTile = null;
  e.preventDefault();
}

function touchMove(e) {
  e.preventDefault();
}

function touchCancel(e) {
  e.preventDefault();
}
