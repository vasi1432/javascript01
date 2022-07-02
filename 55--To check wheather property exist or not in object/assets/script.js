// To check wheather property exist or not in object
const obj = {
  name: "vasi",
  age: 21,
};
//1
console.log(obj.hasOwnProperty(`name`));
//2
console.log(`name` in obj);
