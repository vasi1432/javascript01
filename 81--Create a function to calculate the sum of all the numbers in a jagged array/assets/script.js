const input = [1, 2, [3, [4], [5, [2, 23], 6]], [7, 10]];
//1
let arr = input.flat(3);

let result = arr.reduce((a, b) => a + b);
console.log("approach 1", result);

//2
function jaggedArraySum(arr) {
  let result = 0;
  for (element of arr) {
    if (Array.isArray(element)) {
      element = jaggedArraySum(element);
    }
    result += element;
  }
  return result;
}
console.log(jaggedArraySum([1, 2, [3, [4], [5, [2, 23], 6]], [7, 10]])); //28
