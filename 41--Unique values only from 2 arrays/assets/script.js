function union(arr1, arr2) {
  result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i]) {
        result.push(arr2[j]);
      }
    }
  }
  return result;
}
console.log(union([1, 2, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8]));
