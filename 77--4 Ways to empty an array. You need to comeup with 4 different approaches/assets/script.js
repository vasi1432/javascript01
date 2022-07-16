// 1
let arr = [1, 2, 3, 4, 5];
arr.length = 0;
console.log(arr);
// 2
let arr02 = [1, 2, 3, 4, 5, 76];
arr02 = [];
console.log(arr02);
// 3
let arr03 = [1, 2, 3, 4, 5, 76];
arr03.splice(0, arr03.length);
console.log(arr03);
// 4
let arr04 = [1, 2, 3, 4, 5, 76];
for (let i = 0; i < arr04.length; i++) {
  arr04.pop();
  i--;
}
console.log(arr04);
