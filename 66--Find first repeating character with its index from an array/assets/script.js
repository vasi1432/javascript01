// Find first repeating character with its index from an array
const input = [1, 0, 2, 3, 4, 5, 7, 7];
for (let i = 0; i < input.length; i++) {
  if (input[i] == input[i + 1]) {
    console.log("index of first reapiting character is", i);
    console.log("first reapiting  character is", input[i]);
    break;
  }
}
