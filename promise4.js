const lordPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("the lord had may us rich, I have Successed");
  }, 1000);
});
lordPromise.then((promise) => console.log(promise));

lordPromise.then((resolveValue) => console.log(resolveValue));

const myPromise = new Promise((resolve, reject) => {
  if (!true) {
    setTimeout(() => {
      resolve("I have Successed");
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
  var thisPromiseCount = ++promiseCount;
  console.log(thisPromiseCount + ": Started - Sync code started");

  var p1 = new Promise(function (resolve, reject) {
    console.log(thisPromiseCount + ": Promise started - Async code started");
    // This is only an example to create asynchronism
    window.setTimeout(function () {
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

testPromise();
testPromise();
testPromise();
