let obj = {
  name: "vasi",
  city: "indore",
  age: "21",
};
//delete
//1
delete obj.name;
console.log(obj);
//2
delete obj[`age`];
console.log(obj);
//add
obj.passion = "FrontEnd developer";
console.log(obj);
