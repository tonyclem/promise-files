// Function
const searchShow = (query) => {
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const getResponse = response.map((elem) => elem.show.name);
      resultList(getResponse);
      // clean the error message by default
      document.getElementById("errorMessage").innerHTML = "";
    })
    .catch((err) => {
      document.getElementById("errorMessage").innerHTML = err;
      // hide the result list
      resultList([]);
    });
};
searchShow();

function resultList(results) {
  const resultListShow = document.querySelector("#resultList");
  // result show always be empty
  resultListShow.innerHTML = "";
  results.forEach((result) => {
    let element = document.createElement("li");
    element.innerText = result;
    resultListShow.appendChild(element);
  });
}

// searchTimeOut
let searchTimeout = 0;
window.onload = () => {
  const searchFieldElem = document.querySelector("#searchField");
  // using callback function here
  searchFieldElem.addEventListener("keyup", (e) => {
    const query = e.target.value;
    // clear the previous timeout
    clearInterval(searchTimeout);

    // if the search field is empty, clear the result list and return nothing
    if (searchFieldElem.value.trim().length === 0) {
      return;
    }

    searchTimeout = setTimeout(() => {
      searchShow(query);
    }, 300);
  });
};

// add a text input to the document
// Attach ''keyup'' event to the text input and call the function with the value of the input
// Get the value of the input
// Clear the interval
// convert the result json to an string array using map
// display the result on the page below the text input

// add an event listener to the text input
// when the user types in the text input,
// make a request to the TVMaze API for the search term

// add setTimeOut to reduce the number of https requests
// add error handling
// add a picture next to the show name
// add a loading  indicator when fetching the data
