// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(42);
//   }, 0);
// });
// console.log(1, myPromise);

new Promise((resolve, reject) => {
  reject();
})
  .then(() => console.log("hello world 1"))
  .then(() => console.log("hello home 2"))
  .catch(() => {
    console.log("Catch Err");
    Promise.reject();
  })
  .catch(() => {
    console.log("hello Err");
  })
  .then(() => console.log("pass 3"))
  .then(() => console.log("Why do you pass"));

setTimeout(() => {
  console.log(1, "hello world");
}, 0);
setTimeout(() => {
  console.log(2, "hello world");
}, 0);
