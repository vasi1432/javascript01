function pushZero(arr) {
  let result = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      temp.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  return (result = result.concat(temp));
}
const input = pushZero([1, 0, 2, 0, 0, 9, 0, 6, 7]);
console.log(input);

// Output
// [1, 2, 9, 6, 7, 0, 0, 0, 0];
