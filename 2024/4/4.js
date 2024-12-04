const fs = require("node:fs");
const { get } = require("node:http");
const data = fs.readFileSync("./input.txt", "utf-8");
const test = fs.readFileSync("./small.txt", "utf-8");
function getDiagonal(array) {
  let diagonalWords = [];
  for (let i = 0; i < array.length - 3; i++) {
    for (let j = 0; j < array[0].length - 3; j++) {
      diagonalWords.push(
        array[i][j] +
          array[i + 1][j + 1] +
          array[i + 2][j + 2] +
          array[i + 3][j + 3]
      );
    }
  }
  for (let a = 0; a < array.length - 3; a++) {
    for (let b = array[0].length - 1; b > 2; b--) {
      diagonalWords.push(
        array[a][b] +
          array[a + 1][b - 1] +
          array[a + 2][b - 2] +
          array[a + 3][b - 3]
      );
    }
  }

  return diagonalWords;
}
function getVertical(array) {
  let verticalWords = [];
  for (let i = 0; i < array.length - 3; i++) {
    for (let j = 0; j < array[0].length; j++) {
      verticalWords.push(
        array[i][j] + array[i + 1][j] + array[i + 2][j] + array[i + 3][j]
      );
    }
  }
  return verticalWords;
}
const horizontal1 = data.match(/XMAS/g);
const horizontal2 = data.match(/SAMX/g);
const dataLines = data.split(/\n/);
const vertical = getVertical(dataLines).filter(
  (curr) => curr === "XMAS" || curr === "SAMX"
);
const diagonal = getDiagonal(dataLines).filter(
  (curr) => curr === "XMAS" || curr === "SAMX"
);
const solution =
  horizontal1.length + horizontal2.length + vertical.length + diagonal.length;
console.log(solution);
const testLines = test.split(/\r/).map((curr) => curr.replace(/\n/, ""));
function checkX_MAS(lines, index1, index2) {
  let str =
    lines[index1 - 1][index2 - 1] +
    lines[index1 - 1][index2 + 1] +
    lines[index1][index2] +
    lines[index1 + 1][index2 - 1] +
    lines[index1 + 1][index2 + 1];
  //      top right                  top left                     center                  botom left                  bottom right
  if (["MMASS", "MSAMS", "SSAMM", "SMASM"].includes(str)) {
    return true;
  } else return false;
}
let solution2 = 0;
//dataLines
for (let k = 1; k < dataLines.length - 1; k++) {
  for (let i = 1; i < dataLines[0].length - 1; i++) {
    if (checkX_MAS(dataLines, k, i)) {
      console.log(k + 1, i + 1);
      solution2++;
    }
  }
}
console.log(solution2);
