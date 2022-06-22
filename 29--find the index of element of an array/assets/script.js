let arr = [1, 2, 3, 4, 5, 6, 11, 12, 22, 33, 32, 2];

//using builtin method
let result = arr.indexOf(12);
console.log("index of given number  is ", result);

//using custom method
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 12) {
    console.log("index of given number  is ", i);
  }
}
