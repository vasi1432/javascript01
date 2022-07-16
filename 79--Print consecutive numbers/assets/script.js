function getConsecutiveNumbers(num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push(i + 1);
  }
  return result;
}
const input = getConsecutiveNumbers(10);
console.log(input);
