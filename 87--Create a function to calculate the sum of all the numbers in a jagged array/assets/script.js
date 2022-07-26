function sumOfNestedArrayElements(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result.push(arr[i]);
    } else if (Array.isArray(arr[i])) {
      let temp = sumOfNestedArrayElements(arr[i]);
      result = [...result, ...temp];
    }
  }
  return result;
}

const input = sumOfNestedArrayElements([1, 2, [3, [4], [5, 6]], [7]]);
console.log(input);
