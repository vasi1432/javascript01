// remove duplicate character from array of Element
let arr = "aabbccddddeeefff";
console.log(arr);
let result = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[i + 1]) {
    result.push(arr[i]);
  }
}
console.log(result.join(""));
//using filter
