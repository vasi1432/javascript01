const input = [2, 1, 4, 3, 6, 5, 9];

//1
let arr = input.sort();
let length = arr.length;

let result = {
  smallest: arr[0],
  largest: arr[length - 1],
};
console.log(result);
