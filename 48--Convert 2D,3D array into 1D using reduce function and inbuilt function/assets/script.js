console.log("hey");
const arr = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"],
];
//using reduce
let oneD = arr.reduce((acc, curr) => {
  return acc.concat(curr);
});
console.log(oneD);

//using flat
const arr01 = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f", ["g", "h", "i", ["j", "k"]]],
];
console.log(arr01.flat(3));
//number in the flat fun is refer the numbers of nested arrays
//by default it is one
