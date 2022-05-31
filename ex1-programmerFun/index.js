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
