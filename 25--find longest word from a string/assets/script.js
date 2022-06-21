//convert string in array
//compare every word
//print which is longest

function longestWord() {
  let str = "i am a hardworking person";
  let arr = str.split(" ");
  console.log(arr);
  longest = " ";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}
console.log(longestWord());
