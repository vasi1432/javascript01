let str = "vasi";
let ending = "i";
for (let i = str.length - 1; i > 0; i--) {
  if (str[i] == ending) {
    console.log("true");
    break;
  } else {
    console.log("false");
    break;
  }
}
