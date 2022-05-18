let numHight = 20;
function checkDoubleDigits(num) {
  return new Promise((resolve, reject) => {});
}
// console.log(checkDoubleDigits(numHight));

// Example 2
// ES5: Part 1
var isMomHappy =true;
// Promise
var willIGetNewPhone = new Promise(function (resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: "Samsung",
      color: "black",
    };
    console.log("mom is happy");
    resolve(phone); // fulfilled
  } else {
    var reason = new Error("mom is not happy");
    reject(reason); // reject
  }
});

// ES5: Part 2

// var willIGetNewPhone = ... // continue from part 1

// call our promise
// var askMom = function () {
//   willIGetNewPhone
//     .then(function (fulfilled) {
//       // yay, you got a new phone
//       console.log(fulfilled);
//       // output: { brand: 'Samsung', color: 'black' }
//     })
//     .catch(function (error) {
//       // oops, mom didn't buy it
//       console.log(error.message);
//       // output: 'mom is not happy'
//     });
// };


// Example 3
// ES5

// 2nd promise
// var showOff = function (phone) {
//   return new Promise(function (resolve, reject) {
//     var message =
//       "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";

//     resolve(message);
//   });
// };


// shorten it

// 2nd promise
var showOff = function (phone) {
  var message =
    "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";

  return Promise.resolve(message);
};

// call our promise
var askMom = function () {
  console.log('before asking Mom'); 
  willIGetNewPhone
    .then(showOff)
    .then(function (fulfilled) {
      console.log(fulfilled);
    })
    .catch(function (error) {
      console.log(error.message);
    });
    console.log('after asking mom');
};

askMom();