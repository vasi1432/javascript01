const arr = [1, 2, 2, 3, 4, 2, 3, 5, 4, 0, 4, 6, 5];
const num = 8;
let firsttwo = arr[0] + arr[1];

if (firsttwo < 8) {
  for (let j = 2; j < arr.length; j++) {
    if (firsttwo + arr[j] == 8) {
      console.log(arr[0], arr[1], arr[j]);
    }
  }
}
