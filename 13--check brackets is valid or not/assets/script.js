//   INPUT
const int = "({[]}){()}[()]";
// create an empty stack to push the elements
const stack = [];
// create a count for output
let count = 0;
// start a for loop and iterate all the characters
for (let i = 0; i < int.length; i++) {
  // if we got an opening bracket push it in stack
  let top = stack[stack.length - 1];
  if (int[i] == "(" || int[i] == "[" || int[i] == "{") {
    stack.push(int[i]);
    // if we got an opening bracket in stack and closing bracket in iteration thaan pop it from the stack
  } else if (
    (int[i] === `)` && top === `(`) ||
    (int[i] === `]` && top === `[`) ||
    (int[i] === `}` && top === `{`)
  ) {
    stack.pop();
    //increase the count by two
    count = count += 2;
  }
}
console.log(count);
