function ReverseNum(num) {
  let result = num.toString().split("").reverse().join("") * Math.sign(num);
  console.log(typeof result);
  return result;
}
console.log(ReverseNum(1234));
