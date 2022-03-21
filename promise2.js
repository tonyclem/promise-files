const posts = [
  { title: "Post one", body: "this is Post one" },
  { title: "Post two", body: "this is Post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title} ${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

createPost({ title: "post Three", body: "This is post" })
  .then(getPosts)
  .catch((err) => console.log(err));

// Promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

// Async / Await / Fetch
// async function fetchUser() {
//     const res = await fetch ("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();

//     console.log(data)
// }

// fetchUser()
