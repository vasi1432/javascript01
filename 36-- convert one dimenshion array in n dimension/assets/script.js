let oneD = [`a`, `b`, `c`, `d`];
let twoD = [];
for (let i = 0; i < oneD.length; i++) {
  if (oneD.length > 0) {
    twoD.push(oneD.slice(0, 2));
    oneD = oneD.slice(2);
  }
}
console.log(oneD);
console.log(twoD);
