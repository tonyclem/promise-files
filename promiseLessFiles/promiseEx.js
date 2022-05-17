const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (error) {
      resolve("hello world");
    } else {
      reject("it error ");
    }
  }, 2000);
});

const myPromise1 = Promise.resolve("hello clement");

Promise.all([myPromise, myPromise1])
  .then((v) => console.log(v))
  .catch((err) => console.log(err));

// Example II
const exactPromise = () => {
  let myPromise = new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (!error) {
        resolve("Hello King");
      } else {
        reject("Hi Man");
      }
    }, 3000);
  });

  myPromise.then((v) => console.log(v)).catch((err) => console.log(err));

  const newPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
    (v) => v.json()
  );
  Promise.all([newPromise])
    .then((v) => console.log(v))
    .catch((err) => console.log(err));
};

console.log(exactPromise());
