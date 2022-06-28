// currying function
// means every child function have access to its parent function variable
// but outer can't have access to its child function

function funA(x) {
  return function funB(y) {
    return function funC(z) {
      return x * y * z;
    };
  };
}
console.log(funA(5)(4)(5)); //100
