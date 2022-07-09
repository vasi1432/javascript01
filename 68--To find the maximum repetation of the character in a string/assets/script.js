const input = "aaaabbaaccccccccccccccccccddddddeeeeeee";
let count = 1;
counterArr = [];

let maxChar = "";
for (let i = 0; i < input.length; i++) {
  if (input[i] == input[i + 1]) {
    count++;
  } else {
    counterArr.push(count);
    count = 2;
    for (let j = 0; j < counterArr.length; j++) {
      if (counterArr[j] < count) {
        maxChar = input[i];
      }
    }
    i++;
  }
}
let result = {
  character: maxChar,
  counts: Math.max(...counterArr),
};
console.log(result);
