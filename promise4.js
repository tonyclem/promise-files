const lordPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("the lord had may us rich, I have Succeeded");
  }, 1000);
});

lordPromise
  .then((promise) => console.log(promise))
  .catch((reject) => console.log(reject));

const myPromise = new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    setTimeout(() => {
      resolve("I have Succeeded");
    }, 1000);
  } else {
    reject("I have failed");
  }
});
myPromise
  .then((resolveValue) => console.log(resolveValue))
  .catch((rejectValue) => console.log(rejectValue));

// Example
// Complete example

var promiseCount = 0;

function testPromise() {
  var thisPromiseCount = promiseCount + 1;
  console.log(thisPromiseCount + ": Started - Sync code started");

  var p1 = new Promise(function (resolve, reject) {
    console.log(thisPromiseCount + ": Promise started - Async code started");
    // This is only an example to create asynchronism
    setTimeout(function () {
      resolve(thisPromiseCount);
    }, Math.random() * 2000 + 1000);
  });

  p1.then(function (val) {
    console.log(val + ": Promise fulfilled - Async code terminated");
  }).catch(function (reason) {
    console.log("Handle rejected promise (" + reason + ") here.");
  });

  console.log(thisPromiseCount + ": Promise made - Sync code terminated");
}

// testPromise();
// testPromise();
testPromise();
