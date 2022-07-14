const input = "let";
let result = [];
for (let i = 0; i < input.length; i++) {
  result.push(input[i]);
  for (let j = 0; j < input.length; j++) {
    if (input[i] == input[j]) {
      j++;
      result.push(input[1] + input[2]);
      break;
    }
  }
}
console.log(result);
//yet to complete
// Output
["let", "lte", "elt", "etl", "tle", "tel"];
