const fs = require("node:fs");

function parseInput() {
  const data = fs.readFileSync("./input.txt", "utf-8");
  const arr = data.split(/ {3}|\n/);
  let counter = 0;
  let arr1 = [];
  let arr2 = [];
  arr.map((curr) => {
    if (counter % 2 == 0) {
      arr1.push(curr);
      counter++;
    } else {
      arr2.push(curr);
      counter++;
    }
  });

  return { arr1, arr2 };
}

function solve(arr1, arr2) {
  // we need them sorted to do comparison
  // sort from small to big
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let sum = 0;
  arr1.map((curr) => {
    let index = arr1.indexOf(curr);
    sum += Math.abs(curr - arr2[index]);
  });
  // got the distance!
  return sum;
}
const { arr1, arr2 } = parseInput();
// console.log(solve(arr1, arr2));

/////// PART 2
// We'll reuse the parseInput() function (arr1 and arr2)
function solve2(arr1, arr2) {
  let solution = 0;
  arr1.map((curr) => {
    const coef = arr2.filter((curr2) => curr2 == curr).length;
    solution += curr * coef;
  });
  return solution;
}
console.log(solve2(arr1, arr2));
