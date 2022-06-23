const array = [
  [1, 2, 3, 4],
  [5, 6, 7, 9],
  [45, 76, 22, 2, 1],
  [89, 90, 87, 9],
];
var result = [0, 0, 0, 0];
//iterate for getting forst aray
//again iterate for getting first element
//push first number in the result
// and compare every number to get the largest
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] > result[i]) {
      //array[i][j]= 1 > result[i]=0
      result[i] = array[i][j];
    }
  }
}
console.log(result); //[4,9,76,90]
