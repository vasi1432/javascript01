const str = "madam";
const str01 = [...str].reverse().join("");
if (str01 === str) {
  console.log("given string is an anagram");
} else {
  console.log("given string is not an anagram");
}
