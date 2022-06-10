let low = 8;
let high = 19;
count = 0;
for (let i = low; i <= high; i++) {
  if (i % 2 !== 0) {
    count++;
  }
}
console.log(count);
