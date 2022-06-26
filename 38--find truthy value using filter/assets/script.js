console.log("hey");
function FindTruthy(arr) {
  return arr.filter((items) => {
    return items;
  });
}
console.log(FindTruthy(["hey", 0, "", false, undefined, "vasi", null, NaN, 9]));
