import myImage from "./images/Mask group.jpg";

export function pageLoad() {
  // Clear existing content
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  // Create an image elemnt and set its source
  const img = document.createElement("img");
  img.src = myImage;
  img.alt = "Restaurant view";

  //   Create headline
  const headline = document.createElement("h2");
  headline.textContent = "We provide the best food for you";

  // create restaurant text
  const info = document.createElement("p");
  info.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  // append
  contentDiv.appendChild(img);
  contentDiv.appendChild(headline);
  contentDiv.appendChild(info);

}

document.addEventListener("DOMContentLoaded", pageLoad);
const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", pageLoad);
