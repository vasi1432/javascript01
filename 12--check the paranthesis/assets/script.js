const int = "(())))";
const stack = [];

let count = 0;
for (let i = 0; i < int.length; i++) {
  let top = stack[stack.length - 1];
  if (int[i] === "(") {
    stack.push(int[i]);
  } else if (int[i] === `)` && top === `(`) {
    stack.pop();
    count = count + 2;
  }
}
console.log(count);
