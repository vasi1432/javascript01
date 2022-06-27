// Remove or Delete elements from an array using various ways
// 1
// .
// .
// .
function RemoveElements(arr) {
  //shift remove first element ofv array
  arr.shift();
  return arr;
}
console.log(RemoveElements([1, 2, 3, 4, 8, 12, 16]));
// 2
// .
// .
// .
function RemoveElements01(arr) {
  //short the length
  arr.length = 5;
  return arr;
}
console.log(RemoveElements01([1, 2, 3, 4, 8, 12, 16]));
// 3
// .
// .
// .
function RemoveElements02(arr) {
  //   we can specifie  the index and  number of elements
  //removing two elements from zeroth index using splice
  arr.splice(0, 2);
  return arr;
}
console.log(RemoveElements02([1, 2, 3, 4, 8, 12, 16]));
//4
// .
// .
// .
function RemoveElement03(arr) {
  delete arr[0];
  return arr;
}
console.log(RemoveElement03([1, 2, 3, 4, 8, 12, 16]));
//5
// .
// .
// .
function removeElements04(arr) {
  for (let i = 0; i < arr.length; i++) {
    //removing specific element using for loop and slice
    if (arr[i] === 1) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
console.log(removeElements04([1, 2, 3, 4, 8, 12, 16]));
//6
// .
// .
// .
// with filter
function removeElements05(arr) {
  let arr1 = arr.filter(function (value) {
    return value > 3;
  });

  return arr1;
}
console.log(removeElements05([1, 2, 3, 4, 8, 12, 16]));
