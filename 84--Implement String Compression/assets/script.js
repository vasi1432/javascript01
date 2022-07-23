function stringCompression(str) {
  let result = "";
  count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else if (str[i] !== str[i + 1]) {
      result += count + str[i];
      count = 1;
    }
  }

  return result;
}

const input = stringCompression("aaaabbccccCCCCaabbaa");
console.log(input);
// Output
// ("a4b2c1a2b2a2");
