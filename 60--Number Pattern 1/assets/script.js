let num = 1;
let leng = 4;
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= leng; j++) {
    document.write(num);
  }
  leng--; //for decreasing order of elements
  num++; //for increasing order of number
  document.write("<br/>");
}
