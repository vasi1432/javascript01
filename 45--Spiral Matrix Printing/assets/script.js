//step--1--print first array
//step--2-- print last element of remaining three array
//step--3--reverse  remaining element of last array and print
//step--4--add first element of 2 & 3 array
//step--5--add the remaining element of second array
//step--6--add the remaining element of third array in reverse
let matrix = [
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [9, 10, 11, 12, 13],
  [13, 14, 15, 16, 17],
];
let result = [];
// step--1
result = result.concat(matrix.shift());

// step--2
matrix.forEach((element) => {
  result.push(element.pop());
});

// step--3
result = result.concat(matrix.pop().reverse());

// step--4
let res = [];
matrix.forEach((element) => {
  res.push(element.shift());
});
result = result.concat(res.reverse());

// step--5
result = result.concat(matrix.shift());

// step--6
result = result.concat(matrix[0].reverse());

console.log(result);
// [1, 2, 3, 4, 5, 9, 13, 17, 16, 15, 14, 13, 9, 5, 6, 7, 8, 12, 11, 10]
