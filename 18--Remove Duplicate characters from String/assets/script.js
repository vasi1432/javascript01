const str = "aabbccddeeff";
const res = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] !== str[i + 1]) {
    res.push(str[i]);
  }
}
// const result = res.join("");
console.log(res + "");
console.log("characters in the string are  :", res.length);
