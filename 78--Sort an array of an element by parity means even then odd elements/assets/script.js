//check with every element of the array
//put even numbers in a box
//put odd numbers in a box
//combine and get the result
function sortByParity(arr) {
  let even = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  let result = even.concat(odd);
  return result;
}

const input = sortByParity([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(input);
// Output
// [2, 4, 6, 8, 1, 3, 5, 7, 9];
