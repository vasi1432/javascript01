let numbers = [5, 6, 8, 9, 1, 2, 3, 4];
let arr = numbers.sort();
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] + arr[i + 1] < arr[i + 1] + arr[i + 2]) {
    result = arr[i + 1] + ", " + arr[i + 2];
  }
}
console.log(result);
