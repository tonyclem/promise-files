// promise
let myPromiseEx = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject(); // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise) Here is how to use a Promise:
myPromiseEx.then(
  function (value) {
    /* code if successful */
  },
  function (error) {
    /* code if some error */
  }
);

// New Example
function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("now will have the data update");
      resolve({ userEmail: email });
    }, 3000);
  });
}

function getUserVideo(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Video1", "Video2", "video3"]);
    }, 2000);
  });
}

function VideoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["title of the video"]);
    }, 2000);
  });
}

// const user = loginUser("clementagmail.com", 98765432, user => {
//     console.table(user);
//     getUserVideo(user.userEmail, videos => {
//         console.table(videos);
//         VideoDetails(videos[2], title => {
//             console.table(title);
//         });
//     });
// });

loginUser("flash34gmail.com", "workTogether.com")
  .then((user) => getUserVideo(user.email))
  .then((video) => VideoDetails(video[0]))
  .then((detail) => detail);

// another preference for writing the code declaration
const user = loginUser("flash34gmail.com", "workTogether.com");
const video = VideoDetails(user.email);
console.log(video);
console.log("Finish");
