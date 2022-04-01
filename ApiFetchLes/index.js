// Function
const searchShow = (query) => {
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const getResponse = response.map((elem) => elem.show.name);
      resultList(getResponse);
    });
};
searchShow();

// searchTimeOut
let searchTimeout = 0;
window.onload = () => {
  const searchFieldElem = document.querySelector("#searchField");
  // using callback function here
  searchFieldElem.addEventListener("keyup", (e) => {
    const query = e.target.value;
    clearInterval(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchShow(query);
    }, 300);
  });
};

function resultList(results) {
  const resultListShow = document.querySelector("#resultList");
  resultListShow.innerHTML = "";
  results.forEach((result) => {
    let element = document.createElement("li");
    element.innerText = result;
    resultListShow.appendChild(element);
  });
}

// add a text input to the document
// Attach ''keyup'' event to the text input and call the function with the value of the input
// Get the value of the input
// Clear the interval
// convert the result json to an string array using map
// display the result on the page below the text input

// add an event listener to the text input
// when the user types in the text input,
// make a request to the TVMaze API for the search term
