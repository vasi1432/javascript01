const str = "iruog demha isav";
//reverse using inbuild method
str01 = [...str];
res = str01.reverse().join("");
console.log(res);
// .
// .
// .
// .
// .
//reverse using hardcode
const result = [];
for (let i = str.length - 1; i >= 0; i--) {
  result.push(str[i]);
}
console.log(result.join(""));
// console.log(result + "");
