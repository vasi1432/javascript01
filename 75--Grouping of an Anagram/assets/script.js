const input = ["bag", "gab", "foo", "abg", "oof", "ofo"];
let result = [];
let temp = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[0].includes(input[i][j])) {
      temp.push(input[i]);
      break;
    } else {
      result.push(input[i]);
      break;
    }
  }
}
console.log([temp, result]);

// Output
// [
//   ["bag", "gab", "abg"],
//   ["foo", "oof", "ofo"],
// ];
