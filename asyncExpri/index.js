const names = document.getElementById("names");
const phoneNum = document.getElementById("phoneNum");
const email = document.getElementById("emails");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const review = document.querySelector(".review");

let current = 0;

// fetch data
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      getNameFunc(data);
    });
  // review.textContent = "Loading...";
}
fetchData();

//  Function
const getNameFunc = (people) => {
  const name = people.forEach((element) => {
    names.textContent = ` ${element.name}`;
    phoneNum.textContent = ` ${element.phone}`;
    email.textContent = ` ${element.email}`;
  });
  return name;
};
