const input = [1, 2, 3];
let result = [];
let tempresult01 = [];
let tempresult02 = [];
let tempresult03 = [];
let tempresult04 = [];

for (let i = 0; i < input.length; i++) {
  let tempresult = [];
  tempresult.push(input[i]);
  result.push(tempresult);
  tempresult01.push(input[i]);
}
result.push(tempresult01);

result.push([]);

if (input.length > 2) {
  tempresult02.push(input[0], input[1]);
  tempresult03.push(input[0], input[2]);
  tempresult04.push(input[1], input[2]);

  result.push(tempresult02);
  result.push(tempresult03);
  result.push(tempresult04);
}

console.log(result);
console.log(tempresult01);
console.log(tempresult02);
console.log(tempresult03);
console.log(tempresult04);

// Output
// [1], [1, 2], [2], [];
