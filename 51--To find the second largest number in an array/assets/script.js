function SecondLargest(arr) {
  return arr.sort((x, y) => y - x)[1];
}
// (x, y) => y - x
//with this expression we sort array in reverse order
//or simply print the element of index 1

console.log(
  "second largest number in array is",
  SecondLargest([1, 2, 4, 2, 45, 4, 54])
);
