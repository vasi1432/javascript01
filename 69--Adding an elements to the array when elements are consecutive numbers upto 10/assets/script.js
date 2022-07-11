// Adding an elements to the array when elements are consecutive numbers upto 10
//if number is reapiting then return not a consecutive array
// if it is not reapiting the print numbers upto 10

let arr = [1, 2, 5, 3, 4];
let result = [];
let input = arr.sort();
for (let i = 0; i < 10; i++) {
  if (input[i] == undefined) {
    result.push(i + 1);
  } else if (input[i] !== [input[i + 1]]) {
    result.push(input[i]);
  }
}
console.log(result);
