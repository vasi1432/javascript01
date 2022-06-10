//map
//A map is copy an array and apply the function to it and return the value which we want without changing the input array
// const arr1 = [1, 2, 3, 4, 5, 6];
// const newarr1 = arr.map(myfunction);
// function myfunction(num) {
//   return num * 2;
// }
// console.log(newarr1);
// // we are creating a new array
// // and passing the function in that array with our input array
// // we include the conditions in the function
// // and without affecting the input array we will simply get the new array with the conditions applied on it

// const arr = [1, 2, 3, 4, 5, 6];
// function fun(x) {
//   return x * 3;
// }

// //custom map
// function mymap(arr, fun) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newarr.push(fun(arr[i]));
//   }
//   return newarr;
// }
// console.log(mymap(arr, fun));

// //map

// //filter

//   let arr = [1, 2, 42, 43, 42, 2, 4];
//   const newarr = arr.filter((i) => i % 2 == 0);
//   console.log(newarr);
//   //reduce
//   let arr01 = [1, 2, 42, 43, 42, 2, 4];
//   const arr02 = arr01.reduce((){})

// //map polyfill
//   Array.prototype.mymap = function (cbfun) {
//     const newarr = [];
//     for (let i = 0; i < this.length; i++) {
//       newarr.push(cbfun(this[i]));
//     }
//     return newarr;
//   };

//   const arr01 = [1, 2, 3, 4];
//   function fun1(x) {
//     return x * x;
//   }
//   const mappedArray = arr01.mymap(fun1);
//   console.log(mappedArray);

// //   .
// //   .
// //   .
// //filter

//   Array.prototype.myfilter = function (cbfun) {
//     const newarr = [];
//     for (let i = 0; i < this.length; i++) {
//       if (cbfun(this[i])) {
//         newarr.push(this[i]);
//       }
//     }
//     return newarr;
//   };
//   //   check;
//   const arr01 = [1, 2, 3, 4];
//   const filtercheck = arr01.myfilter((x) => x > 2);
//   console.log(filtercheck);

// polyfill of map and filter
Array.prototype.mapfilter = function (cbfun, arr, i) {
  const newarr = [];
  const newarr01 = [];

  for (let i = 0; i < this.length; i++) {
    newarr.push(cbfun(this[i]));
  }
  return newarr;
  for (let j = 0; j < newarr.length; j++) {
    if (cbfun(newarr[i])) {
      newarr01.push(newarr[i]);
    }
    return newarr01;
  }
};
const arr01 = [1, 2, 3, 4];
const check = arr01.mapfilter((x) => (y = x * 6) && y < 15);
console.log(check);
