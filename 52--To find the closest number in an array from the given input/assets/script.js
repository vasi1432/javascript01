const arrr = [1, 10, 7, 6, 2, 9];
let arr = arrr.sort();
const nearbyNumber = 5;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === nearbyNumber + 1) {
    console.log(arr[i]);
  }
  //less than number condition
  if (arr[i] === nearbyNumber - 1) {
    console.log(arr[i]);
  }
}
