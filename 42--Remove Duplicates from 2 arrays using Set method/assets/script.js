function UniqueSet(arr1, arr2) {
  arr = [...arr1, ...arr2];
  let unique = [...new Set(arr)];
  return unique;
}

console.log(UniqueSet([1, 2, 3, 4, 5, 1], [1, 2, 3, 4, 5, 1, 6, 7, 4, 3, 8]));
