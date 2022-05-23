Promise.resolve()
  .then(() => console.log("Hi Clement"))
  .then(() => console.log("Hi Sunday"))
  .catch(() => {
    throw new Error("OH TEH NOEZ!");
  })
  .then(() => console.log("hello Three"));
console.log("Hello Mr King");

// Example
Promise.resolve()
  .then(function nameA() {
    Promise.resolve().then(function nameC() {
      console.log("hello Mr c");
    });
  })
  .then(function nameB() {
    Promise.resolve().then(function nameD() {
      console.log("hello Mr d");
    });
  });

// Example
const pause = (millis) => new Promise((resolve) => setTimeout(resolve, millis));

const start = Date.now();
console.log("Start");

pause(1000).then(() => {
  const end = Date.now();
  const secs = (end - start) / 1000;
  console.log("End:", secs);
});
