// callBack function
const callStr1 = false;
const callStr2 = true;

const callFunc1 = (callBack, callBackErr) => {
  if (callStr1) {
    callBack({
      name: "clement",
      age: "18",
    });
  } else if (callStr2) {
    callBack({
      address: "beijing",
      phoneNumber: "123456789",
    });
  } else {
    callBackErr("sorry, you are not allowed to access this page");
  }
};

callFunc1(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);

// promise
const callFunc2 = () => {
  return new Promise((resolve, reject) => {
    if (callStr1) {
      resolve({
        name: "clement",
        age: "18",
      });
    } else if (callStr2) {
      resolve({
        address: "beijing",
        phoneNumber: "123456789",
      });
    } else {
      reject("sorry, you are not allowed to access this page");
    }
  });
};

callFunc2()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
