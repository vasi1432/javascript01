const data = "aaaaabbcccddeeeeff";
const newarr = [];
count = 1;
for (let i = 0; i < data.length; i++) {
  if (data[i] === data[i + 1]) {
    count++;
  } else {
    newarr.push(count + data[i]);
    count = 1;
  }
}
let result = newarr.join("");

console.log(result);
