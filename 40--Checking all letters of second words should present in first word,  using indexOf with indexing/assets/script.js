function CheckLetters(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();

  for (let letters of second) {
    if (first.indexOf(letters) == -1) {
      return false;
    }
  }
  return true;
}
console.log(CheckLetters(["Hello", "he"]));
