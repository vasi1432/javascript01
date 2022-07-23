// check with elements of Array
// sum first two Element
// if sum of two element is present in array than make a pair of three
// two are of som elem and thirs one is their sum in array

function findTriplets(inputArr) {
  let result = [];
  for (let i = 0; i < inputArr.length; i++) {
    let sum = inputArr[i] + inputArr[i + 1];
    if (inputArr.includes(sum)) {
      console.log(inputArr[i], inputArr[i + 1], sum);
    }
  }
  return result;
}

const input = findTriplets([-1, -4, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
