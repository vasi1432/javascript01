function countingVowels() {
  vowels = ["a", "e", "i", "o", "u"];
  let str = "vasi";
  count = 0;
  for (const letter of str) {
    if (vowels.includes(letter)) {
      count++;
      console.log(letter);
    }
  }
  console.log(count);
  return count;
}
countingVowels();
