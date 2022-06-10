var sum = 0;
var x;
for (x = 0; x < 100; x++) {
  if (x % 3 == 0 || x % 5 == 0) {
    sum += x;
  }
}
console.log(sum);
