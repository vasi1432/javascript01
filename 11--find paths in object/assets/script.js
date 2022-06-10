var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

let str = "a.b.c.d.e.f";
let newstr = str.split(".");

for (let i = 0; i < newstr.length; i++) {
  if (obj[newstr[i]] !== undefined) {
    obj = obj[newstr[i]];
    console.log(obj);
  } else {
    console.log(undefined);
  }
}
