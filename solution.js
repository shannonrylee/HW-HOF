// You must RETURN your result in each function!
const array = [];

nums.forEach((element) => {
  array.push(element);
  return array;
});

const newArray = [];
nums.forEach((a, b) => {
  newArray.push(a + b);
  return newArray;
});

const total = objs.forEach((objs) => {
  console.log(sum);
  return (sum += objs);
});

// come back:
// function printMoney(decimals) {
/**
 * @param decimals => [2.30, 2.40, 32.99]
 * Using .map, return an array of decimals formatted as dollars.
 * EX: {
 * input: [12.34, 9.99],
 * output: ['$12.34', '$9.99']
 * }
 * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
 */

const trueValues = values.filter((element) => {
  if (element.happy == true) return element;
});

let addTwo = nums.reduce((a, b) => {
  return 0 + 2;
});
/**
 * @param nums => [1,2,3,4]
 * Using .reduce, return the total sum of all numbers.
 * Each number should have 2 added to it.
 */
//   3
//   4 => 7

// come back:
// function joinStrings(strings) {
/**
 * @param strings => ['g', 'f', 'z']
 * Using .reduce, return a new string containing each string from the strings array.
 */

//Bonus
function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
}

module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings,
};
