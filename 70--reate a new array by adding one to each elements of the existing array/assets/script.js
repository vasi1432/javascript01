const input = [1, 2, 3, 4];

//1
let arr = input.map((a) => {
  return a + 1;
});
console.log(arr);
//2
let result = [];
for (let i = 0; i < input.length; i++) {
  result.push(input[i] + 1);
}
console.log(result);
