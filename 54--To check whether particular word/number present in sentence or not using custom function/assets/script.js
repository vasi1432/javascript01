function CheckWord(arr, check) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === check) {
      console.log(true);
      break;
    }
    return "false";
  }
}
console.log(CheckWord(["vasi", "zaid", "maaz"], "vasi"));
