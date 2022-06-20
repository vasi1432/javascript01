const arr01 = [2, 3, 4, 34, 445, 656, 5, 32, 2445, 656, 3, 42, 1, 2];
const arr02 = [3, 4, 1, 634, 5, 32, 2445, 656, 3, 42, 1, 2];
const result = [];
const result01 = [];

for (let i = 0; i < arr01.length; i++) {
  for (let j = 0; j < arr02.length; j++) {
    if (arr01[i] === arr02[j]) {
      result.push(arr02[j]);
    }
  }
}
console.log(result.sort());

for (let i = 0; i < result.length; i++) {
  if (result[i] !== result[i + 1]) {
    result01.push(result[i]);
  }
}
console.log(result01);
