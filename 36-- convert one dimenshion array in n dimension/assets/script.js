// using splice
let oneD = [`a`, `b`, `c`, `d`];
let twoD = [];
for (let i = 0; i < oneD.length; i++) {
  if (oneD.length > 0) {
    twoD.push(oneD.slice(0, 2));
    oneD = oneD.slice(2);
  }
}
console.log(twoD);
// .
// .
// .
// .
// .
// using slice method
let oneD01 = [`a`, `b`, `c`, `d`];
let twoD01 = [];
for (let i = 0; i < oneD01.length; i++) {
  if (oneD01.length > 0) {
    twoD01.push(oneD01.slice(0, 2));
    oneD01 = oneD01.slice(2);
  }
}
console.log("LN:25", twoD01);
