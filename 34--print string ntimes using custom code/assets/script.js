let str = "vasi";
let n = 10;
let result = " ";
if (n <= 0) {
  console.log("nothing to print");
} else {
  for (let i = 0; i < n; i++) {
    result = str + " " + result;
  }
}
console.log(result);
