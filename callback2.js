console.log("Start");

function loginUser(email, password, callbacks) {
  setTimeout(() => {
    console.table("now will have the data updata");
    callbacks({ userEmail: email });
    callbacks({ userPassword: password });
  }, 5000);
}

function getUserVideo(email, callbacks) {
  setTimeout(() => {
    callbacks(["Video1", "Video2", "video3"]);
  }, 2000);
}

function VideoDetails(video, callbacks) {
  setTimeout(() => {
    callbacks(["title of the video"]);
  }, 2000);
}

const user = loginUser("clementa134gmaik.com", 98765432, (user) => {
  console.table(user);

  getUserVideo(user.userEmail, (videos) => {
    console.table(videos);
    VideoDetails(videos[2], (title) => {
      console.table(title);
    });
  });
});

// Callback Example 2

console.log("Start 2");

function signUp(email, password, pushinCallback) {
  setTimeout(() => {
    console.log("Welcome back here and continue");
    pushinCallback({ userEmail: email });
    pushinCallback({ userPassword: password });
  }, 4000);
}

const people = signUp("tonycle11@mail.kd", 12478594, (people) => {
  console.log(people);
});

console.log("welcome back home");
