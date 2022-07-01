let num = 153;
let arr = num.toString().split("");
power = arr.length;
let result = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    result.push(arr[i] ** power);
  }
}
let armstrong = result.reduce((prev, curr) => {
  return prev + curr;
});
if (num === armstrong) {
  console.log(true);
} else {
  console.log(false);
}

console.log(result);
console.log(armstrong);

// .
// .
// .
// .
// .
// let num = 153;
// arr = num.toString().split("");
// console.log(arr);
// const result = arr.reduce((prev, curr) => {
//   return prev + curr ** arr.length;
// });

// console.log(result);
