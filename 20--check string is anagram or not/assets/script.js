a = "geeksforgeeks";
b = "forgeeksgeeks";

let arr01 = a.split("").sort().join("");
let arr02 = b.split("").sort().join("");

if (arr01 === arr02) {
  console.log("yes");
} else {
  console.log("no");
}
