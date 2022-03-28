// get element
const main = document.getElementById("main");

main.innerHTML = "<p>Loading.....</p>";

// fetch data
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((people) => (main.innerHTML = getNameFunc(people)));

// Function
const getNameFunc = (people) => {
  const name = people
    .map((person) => {
      return `<li> Name: ${person.name},  Email: ${person.email}</li>`;
    })
    .join("\n");

  return `<ul>${name}</ul>`;
};
