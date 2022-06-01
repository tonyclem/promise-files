"use strict";

const STEP_INTERVAL_MS = 50;
const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function walk(img, startPos, stopPos) {
  while (startPos < stopPos) {
    img.style.left = `${startPos}px`;
    startPos += STEP_SIZE_PX;
    await wait(STEP_INTERVAL_MS);
  }
}

async function dance(img) {
  const savedSrc = img.src;
  img.src = DANCING_CAT_URL;
  await wait(DANCE_TIME_MS);
  img.src = savedSrc;
}

async function catWalk() {
  const img = document.querySelector("img");
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  while (true) {
    await walk(img, startPos, centerPos);
    await dance(img);
    await walk(img, centerPos, stopPos);
  }
}

window.addEventListener("load", catWalk);
