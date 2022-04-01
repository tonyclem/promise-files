// Async await // fetch inside data
async function displayUser() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await data.json();
  const empty = [];
  for (let res of response.name) {
    const dataInside = await fetch(
      `https://jsonplaceholder.typicode.com/users/${res.id}`
    );
    const responseInside = await dataInside.json();
    empty.push(responseInside);
  }
  return empty;
}

displayUser();

// Async await // fetch inside data II with map method
async function displayUser2() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      const empty = data.name.map((res) =>
        fetch(`https://jsonplaceholder.typicode.com/users/${res.id}`)
          .then((response) => response.json())
          .then((data) => data.id)
      );
      return Promise.all(empty);
    });
}

displayUser2();
