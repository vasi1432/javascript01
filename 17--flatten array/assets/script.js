const arr = [
  18,
  {
    a: [1, 2, 3, "text"],
  },
  [[1, 2, 3, { a: [1, 2, 3, "text"] }]],
  [2, 4, 5],
];
// first of all we iterate our array
// check the current is  numbers and print
// if current element is array then we have to add a recursion condition
// so it will again iterate and return the number
//  or if it again get the nested array so it will again rescurse and so on
// or as if we have an object as a key
// and add the result we got in an predefined array
// so check if type of current element === object
// then we ahve to get all the values of object in an array
// and apply the recurtion
// or add the result we got in a predefined array
//so it will checking again and again the number or array or object

function flattenNum(input) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    currentElement = arr[i];
    if (typeof currentElement === "number") {
      result.push(currentElement);
    } else if (Array.isArray(currentElement)) {
      const res = flattenNum(currentElement);

      var result = [...result, ...res];
    } else if (typeof currentElement === "object") {
      const res = flattenNum(currentElement);
      var result = Object.values(currentElement);
    }
  }
  return result;
}
console.log(flattenNum(arr));

// .
// .
// .
// .
// .
// const inputArray = [
//   7,
//   {
//     a: [1, 2, 3, "text"],
//     b: 20,
//     c: {
//       d: [1, 2, 3],
//     },
//   },
//   [[1, 2, 3, { a: [1, 2, 3, "text"] }]],
//   [2, 4, 5, null, undefined, "ritesh"],

//   15,
//   null,
//   undefined,
//   true,
//   false,
//   NaN,
// ];

/**
 * Step 1 - Iterate the input
 * Step 2 - Check if the current element is a number
 * Step 2.1 - If true, push that element to the new array & continue
 * Step 3   -  Check if currentElement is array
 * Step 3.1 -  If true, recursively call the function
 * Step 3.2 - Merge the output with the result arr & continue
 * Step 4   - Check if typeof === object
 * Step 4.1 - If true, get all keys values & recursively handle it & update the result
 */

// function flatNumbers(input) {
//   let results = [];
//   for (let i = 0; i < input.length; i++) {
//     const currentElem = input[i];

//     //Handle for falsy case
//     if (
//       currentElem === undefined ||
//       currentElem === null ||
//       currentElem === false
//     ) {
//       continue;
//     }

//     if (typeof currentElem === "number" && !isNaN(currentElem)) {
//       results.push(currentElem);
//       continue;
//     }

//     // Check Current element is holding an array
//     if (Array.isArray(currentElem)) {
//       const result = flatNumbers(currentElem);
//       results = [...results, ...result];
//       continue;
//     }

//     // Handle for objects
//     if (typeof currentElem === "object") {
//       const result = flatNumbers(Object.values(currentElem));
//       results = [...results, ...result];
//       continue;
//     }
//   }

//   return results;
// }

// const a = flatNumbers(inputArray);

// console.log(a);
