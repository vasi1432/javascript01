let leng = 5; //for decreasing order of stars
for (let i = 0; i <= 5; i++) {
  //loop for the 5 row
  for (let j = 0; j <= leng; j++) {
    // loop for the length of the stars
    document.write("*");
  }
  leng--;
  document.write("<br/>");
}
