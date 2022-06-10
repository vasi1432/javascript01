let arr = [1, 0, 3, 0, 3, 0, 0, 0, 4, 5, 0, 7];
lengtharr = arr.length;
for (let i = 0; i < lengtharr; i++) {
  if (arr[i] === 0) {
    arr.splice(i, 1);
    arr.push(0);
    i--;
    lengtharr--;
  }
}
console.log(arr);
