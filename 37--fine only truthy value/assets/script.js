function truthyValue(arr) {
  let truthy = [];

  for (const values of arr) {
    if (values) {
      truthy.push(values);
    }
  }
  return truthy;
}
console.log(
  truthyValue(["hey", 0, "", false, undefined, "vasi", null, NaN, 9])
);
