const fs = require("node:fs");
const data = fs.readFileSync("./input.txt", "utf-8");
const regex = /mul\(\d+,\d+\)/g;

const array = data.match(regex);

const filteregex = /\d+/g;
const init = 0;
const result = array.reduce((prev, curr) => {
  let numbers = curr.match(filteregex);

  return prev + parseInt(numbers[0]) * parseInt(numbers[1]);
}, init);
console.log(result);

// Part 2:

// find all
const regex2 = /(mul\(\d+,\d+\)|do\(\)|don't\(\))/g;
const filteredData = data.match(regex2);
console.log(filteredData);

let doIsActive = true;
let solution = 0;
filteredData.map((current) => {
  console.log(current);
  console.log(doIsActive);

  if (doIsActive && current[0] == "m") {
    console.log("adding");
    let numbers = current.match(filteregex);
    solution += parseInt(numbers[0]) * parseInt(numbers[1]);
  } else if (doIsActive && current == "don't()") {
    console.log("deactivating");

    doIsActive = false;
  }
  if (!doIsActive && current == "do()") {
    console.log("activating");

    doIsActive = true;
  }
});
console.log(solution);
