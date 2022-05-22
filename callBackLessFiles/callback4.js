console.log("hello world");

setTimeout(() => {
  console.log("mr king clement");
}, 00);
console.log("rich and blessing");

// example II
let production = () => {
  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("The fruit has been chopped");
    }, 2000);
  }, 5000);
};
production();














