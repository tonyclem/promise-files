const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello ");
  }, 0000);
});

let displayProm = myPromise.then((val) => console.log("this the value", val));

// promise Any
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));
// expected output: "quick"

// Example Any
const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
}); // expected output: "Done quick"

// example
console.log("hello");
console.log("world");

// Promise Race
const racePromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const racePromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([racePromise1, racePromise2]).then((value) => {
  console.log(value);
});
// expected output: "two"
