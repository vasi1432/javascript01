const input = "cCaaAAbbbBBB";
let output = "";
let result = {};
for (const letter of input) {
  result[letter] = (result[letter] || 0) + 1;
}
let res = Object.keys(result).sort((a, b) => result[b] - result[a]);
console.log(result);
console.log(res);
for (letter of res) {
  for (let i = 0; i < result[letter]; i++) {
    output += letter;
  }
}
console.log(output);
// Output
// ("bbbBBBaaAAcC");
