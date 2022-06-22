let arr = [1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 8];
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i + 1]) {
    console.log("first duplicate element is", arr[i]);
    break;
  }
}
