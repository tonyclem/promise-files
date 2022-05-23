const myPromise = new Promise((resolve, reject) => {
  resolve("hello clement");
});
// console.log(myPromise);

const promise = new Promise((resolve, reject) => {});
// console.log(promise);

// example 2

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  });
});

let printOut = p.then(() => console.log("hi"));
// console.log(printOut);

// Example
setTimeout(function a() {
  console.log("hello");
}, 1000);

setTimeout(function b() {
  console.log("clement");
}, 500);

setTimeout(function c() {
  console.log("Sunday");
}, 0);

function d() {}

d();
