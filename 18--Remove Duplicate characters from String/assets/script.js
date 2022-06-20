const str = "geeksforgeeks";
const res = [];
const res01 = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] !== str[i + 1]) {
    res.push(str[i]);
  }
}
console.log("LN:10", res.sort() + "");
for (let i = 0; i < res.length; i++) {
  if (res[i] !== res[i + 1]) {
    res01.push(res[i]);
  }
}
console.log("LN:18", res01 + "");
console.log("characters in the string are  :", res01.length);
