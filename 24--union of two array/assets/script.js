function Union(arr1, arr2) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.includes(arr2[j])) {
    } else {
      arr1.push(arr2[j]);
    }
  }
  return arr1;
}
console.log(Union([1, 2, 3], [3, 4, 5]));
