console.log("hey");

function sumAll(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result += i + " ";
  }
  return result;
}
console.log(sumAll(1, 7));
