const input = [1, 2, [3, [4], [5, [2, 23], 6]], [7, 10]];

let arr = input.flat(3);
console.log(arr);

let result = arr.reduce((a, b) => a + b);
console.log(result);
