const input = [
  [1, -1, 2, -4, 5],
  [-1, -1],
];
let count = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] < 0) {
      count++;
    }
  }
}
console.log(count);
