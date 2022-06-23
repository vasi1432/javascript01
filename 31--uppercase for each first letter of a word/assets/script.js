// uppercase for each first letter of word
//split string to iterate avery word of giver string
//split it to add the remaining letters of the string
let str = "i am a front end Developer";
let arr = str.split(" ");
let result = [];

for (let i = 0; i < arr.length; i++) {
  result.push(arr[i][0].toUpperCase() + arr[i].slice(1));
}
console.log(result.join(" "));

//using map function
let str01 = "i am a front end Developer";
let uppercase = str01.split(" ").map((zero) => {
  return zero[0].toUpperCase() + zero.slice(1);
});
console.log(uppercase.join(" "));
