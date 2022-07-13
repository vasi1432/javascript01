const input = "cCaaAAbbbBBB";
let arr = input.split(``);
console.log(arr);
let result = {};
counter = 1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[i + 1]) {
    result.key = arr[i];
    result.value = counter++;
    i++;
  }
}
console.log(result);
// Output
// ("bbbBBBaaAAcC");
