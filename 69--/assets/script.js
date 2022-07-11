setTimeout(function a() {
  console.log("a");
}, 0);
setTimeout(function b() {
  console.log("b");
}, 4000);
setTimeout(function c() {
  console.log("c");
}, 1000);
function d() {
  console.log("d");
}
d();
