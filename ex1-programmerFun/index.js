"use strict";

// function requestData(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error(response.statusText);
//         }
//       })
//       .then((data) => resolve(data))
//       .catch((error) => reject(error.message));
//   });
// }

function renderImage(data) {
  const elementImg = document.createElement("img");
  elementImg.alt = "image";
  elementImg.src = data.img;
  document.body.style.backgroundColor = "green";
  document.body.appendChild(elementImg);
  console.log(data);
}

function renderError(error) {
  const h1 = document.createElement("h1");
  h1.textContent = error;
  document.body.style.backgroundColor = "red";
  document.body.appendChild(h1);
  console.log(error);
}

async function main(url) {
  try {
    const data = await fetch(url);
    if (!data.ok) {
      throw new Error(data.statusText);
    }
    const jsonDat = await data.json();
    renderImage(jsonDat);
  } catch (error) {
    renderError(error);
  }
}

window.addEventListener("load", main("https://xkcd.now.sh/?comic=latest"));

// Example II same as above code

// function requestData(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error(response.statusText);
//         }
//       })
//       .then((data) => resolve(data))
//       .catch((error) => reject(error.message));
//   });
// }

// function renderImage(data) {
//   const elementImg = document.createElement('img');
//   elementImg.alt = 'image';
//   elementImg.src = data.img;
//   document.body.style.backgroundColor = 'green';
//   document.body.appendChild(elementImg);
//   console.log(data);
// }

// function renderError(error) {
//   const h1 = document.createElement('h1');
//   h1.textContent = error;
//   document.body.style.backgroundColor = 'red';
//   document.body.appendChild(h1);
//   console.log(error);
// }

// async function main() {
//   try {
//     const data = await requestData('https://xkcd.now.sh/?comic=latest');
//     renderImage(data);
//   } catch (error) {
//     renderError(error);
//   }
// }


/*------------------------------------------------------------------------------
1. Complete the function `requestData()` using `fetch()` to make a request to 
   the url passed to it as an argument. The function should return a promise. 
   Make sure that the promise is rejected in case of HTTP or network errors.
2. Notice that the function `main()` calls `requestData()`, passing it the url 
   `https://xkcd.now.sh/?comic=latest`. Try and run the code in the browser and 
   open the browser's console to inspect the data returned from the request.
3. Next, complete the function `renderImage()` to render an image as an `<img>` 
   element appended to the document's body, using the data returned from the API.
4. Complete the function `renderError()` to render any errors as an `<h1>` 
   element appended to the document's body.
5. Refactor the `main()` function to use `async/await`.
6. Test error handling, for instance, by temporarily changing the `.sh` in the 
   url with `.shx`. There is no server at the modified url, therefore this 
   should result in a network (DNS) error.
------------------------------------------------------------------------------*/