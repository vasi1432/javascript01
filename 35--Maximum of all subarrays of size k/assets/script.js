// getting  pairs of four elements from a given array
// maximum of that pair

// iterate that array
// get a pair of four elements
// while getting this pair we have to check max
// we have to store our current element in a variable
// check in every iteration the number is greater than or not
// after getting max we have to swap

let arr = [1, 3, 2, 4, 5, 6, 10, 11, 12];
let k = 4;
// i=2=>3;
// i-k =>i-(k-1);
let arr01 = [];
let arr02 = [];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  count++;
  let max = [];
  arr01.push(max);
  if (count <= k) {
    if (arr[i] > max) {
      max.push(arr[i]);
    }
  } else if ((count = k)) {
    arr02.push(max);
    i = i - k;
    count = 0;
  }
}
console.log(arr01);
// console.log(max);
console.log(arr02);
// .
// .
// .
// .
// function max_of_subarrays(arr, n, k) {
//   const result = [];
//   let counter = 0;
//   let maxNumber = arr[0];

//   for (let i = 0; i < n-(k-1); i++) {
//     const copy = [...arr];
//     // console.log("inside If before ", { counter, i });

//     let chunk = copy.splice(i, k);
//     // console.log({ chunk });
//     result.push(Math.max(...chunk));
//   }
//   return result;
// }
// .
// .
// .
// .
// function max_of_subarrays(arr, n, k) {

//   const result = [];
//   let counter = 0;
//   let maxNumber = arr[0];

//   for (let i = 0; i<n;i++){
//       console.log("inside If before ",{counter,i})
//       counter+=1;
//       // if (counter<=k){

//           if(maxNumber<arr[i]){maxNumber=arr[i]}

//       //  } else
//          if (counter==k){
//           //console.log("Elseif before ",{counter,maxNumber})
//           result.push(maxNumber);
// i=i-(k-1); // i=i-counter;
//           maxNumber=arr[i];
//           counter=0;
//           //console.log("Elseif after ",{counter,maxNumber,result,i});
//           //console.log(`Compared ${i+1}th sub array`)
//        }
//   }
//   return result;
// }

// console.log(max_of_subarrays(arr,n,k));
