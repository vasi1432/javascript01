// 1 - creating a function
// 2 - crete a condition statement
// 3 - if true -  return value is truthy
// 4 - else - return value is falsy

value = "";
function checkTruthy(value) {
  if (value) {
    return "the value is truthy";
  } else {
    return "the value is falsy";
  }
}
console.log(checkTruthy(value));
