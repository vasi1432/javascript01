//convert string in array
//compare every word
//print which is longest

let str = "i like the programming";

let arr = str.split(" ");
console.log(arr);
result = " ";
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > result.length) {
    result = arr[i];
  }
}
console.log(result);
