const input = "cCaaAAbbbBBB";
let result = {};
for (const letter of input) {
  result[letter] = (result[letter] || 0) + 1;
}
console.log(result);
