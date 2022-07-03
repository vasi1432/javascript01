function CheckLength(arr) {
  leng = 0;
  while (arr[leng] != null) {
    leng++;
  }
  return leng;
}
console.log(CheckLength([1, 2, 3, 4, 5, 56]));
