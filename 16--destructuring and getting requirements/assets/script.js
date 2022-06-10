// destructure array of object of data and fine suitable combination and print the required output
//requirement is to get the details of  cutomer who order and print according to our requirement
//we will destructure the users data and orders data what we need in output
// then comapre according to user id and
// then push that orders details in the users data

// let arr = [];
// for (let i = 0; i < users.length; i++) {
//   //   arr.push(users[i].id);
//   for (let j = 0; j < orders.length; j++) {
//     if (users[i].id === orders[j].customerId) {
//       users[i].order = orders[j];
//     }
//   }
//   arr.push(users[i]);
// }

// console.log(arr);
const users = [
  {
    id: 123,
    name: "Sagar",
    city: "Indore",
  },
  {
    id: 124,
    name: "Arun",
    city: "Morena",
  },
  {
    id: 125,
    name: "Nikhil",
    city: "Dhule",
  },
];
const orders = [
  {
    id: 1234,
    name: "iPhone 13 Pro Max",
    price: "123000",
    customerId: 123,
  },
  {
    id: 1235,
    name: "Apple iWatch",
    price: "49000",
    customerId: 124,
  },
];

//destructuring of user data
const user01 = [];
for (let i = 0; i < users.length; i++) {
  const { id, name } = users[i];
  const newUser = { userid: id, userName: name, order: [] };
  user01.push(newUser);
}

//destructuring of orders data
let orders01 = [];
for (let j = 0; j < orders.length; j++) {
  const { id, name, price } = orders[j];
  const newOrder = { orderId: id, productName: name, productPrice: price };
  orders01.push(newOrder);
}
//checking users order and push order in the user details
for (let i = 0; i < user01.length; i++) {
  for (let j = 0; j < orders.length; j++) {
    if (user01[i].userid === orders[j].customerId) {
      user01[i].order.push(orders01[j]);
    }
  }
}
console.log("ln:79", user01);

// const result = [
//   {
//     userId: 123,
//     userName: "Sagar",
//     orders: [
//       {
//         orderId: 1234,
//         productName: "iPhone 13 Pro Max",
//         productPrice: "123000",
//       },
//     ],
//   },
//   {
//     userId: 124,
//     userName: "Arun",
//     orders: [
//       {
//         orderId: 1235,
//         productName: "Apple iWatch",
//         productPrice: "49000",
//       },
//     ],
//   },
//   {
//     userId: 125,
//     userName: "Nikhil",
//     orders: [],
//   },
// ];
