var a = -11;
var b = 2;
var c = 122;
if (a > b && a > c) {
  if (b > c) {
    console.log("line15 " + a + "," + b + "," + c);
  } else {
    console.log("line17 " + a + "," + c + "," + b);
  }
} else if (b > a && b > c) {
  if (a > c) {
    console.log("line21 " + b + "," + a + "," + c);
  } else {
    console.log("line23" + b + "," + c + "," + a);
  }
} else if (c > a && c > b) {
  if (a > b) {
    console.log("line27 " + c + "," + a + "," + b);
  } else {
    console.log("line29 " + c + "," + b + "," + a);
  }
}
