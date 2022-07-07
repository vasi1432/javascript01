// Make alternate character to upper case
//1
function UpperCase(input) {
  const arr = input.toLowerCase().split(``);
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result = result + arr[i].toUpperCase();
    } else {
      result = result + arr[i].toLowerCase();
    }
  }
  return result;
}
console.log(UpperCase("Priya Bagde"));
//2
function Upper(arr) {
  arr.map((a, index) => {
    index % 2 == 0 ? a.toUpperCase : a.toLowerCase;
  });
}
console.log(UpperCase("vasi ahmed"));
