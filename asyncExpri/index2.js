let data = [
  {
    name: "John",
    phone: "123-456-7890",
    email: "example.com",
  },
  {
    name: "clement",
    phone: "1234567890",
    email: "example.org",
  },
  {
    name: "james",
    phone: "123-456-7890",
    email: "example.net",
  },
  {
    name: "donald",
    phone: "1234567890",
    email: "example.get",
  },
];

// select the elements

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let current = 0;

// load initial data
window.addEventListener("DOMContentLoaded", function () {
  const list = data[current];
  author.textContent = list.name;
  job.textContent = list.email;
  info.textContent = list.phone;
});

const showData = (arr) => {
  const list = data[arr];
  author.textContent = list.name;
  job.textContent = list.email;
  info.textContent = list.phone;
};

prevBtn.addEventListener("click", () => {
  current--;
  if (current < 0) {
    // if is less the current list
    current = data.length - 1;
  }
  showData(current);
});

nextBtn.addEventListener("click", () => {
  current++;
  if (current > data.length - 1) {
    //   if is greater the current list return zero
    current = 0;
  }
  showData(current);
});
