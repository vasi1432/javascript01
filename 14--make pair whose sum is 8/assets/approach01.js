const arr = [1, 2, 3, 4, 0, 4, 6, 5];
const num = 8;
const result = [];

//we have an array of number
//first of check the first number with all the numbers in array
// then check the next number with every number of array
//IF THE NUMBER IS less than 8 then
//check every number again to get the sum eight
//print thee three numbers whose sum is 8

for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] + arr[j] < 8) {
      for (let k = 2; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] == 8) {
          var res = [arr[i], arr[j], arr[k]];

          console.log(res);
        }
      }
    }
  }
}
