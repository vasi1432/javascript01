// find SUM ,PRODUC,AVERAGE
let arr = [1, 2, 3, 4];

//SUM
let sum = arr.reduce((acc, curr) => {
  return acc + curr;
});
console.log(sum); //10

//PRODUCT
let product = arr.reduce((acc, curr) => {
  return acc * curr;
});
console.log(product); //24

//AVERAGE
let average = arr.reduce((acc, curr) => {
  let total = acc + curr;
  return total / arr.length + 1;
});
console.log(average); //2.5
