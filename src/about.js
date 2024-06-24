import image1 from "./images/about.jpg";

export function loadAbout() {
  const aboutBtn = document.getElementById("about");
  aboutBtn.addEventListener("click", () => {
    const contentDiv = document.querySelector("#content");

    // Clear existing content
    contentDiv.innerHTML = "";

    // Create the main container div
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "container");

    // Create about us container
    const about = document.createElement("div");
    about.setAttribute("id", "aboutUs");

    const img1 = document.createElement("img");
    img1.src = image1;
    img1.alt = "spaghetti and green cabbage salad";

    const aboutUs = document.createElement("h2");
    aboutUs.textContent = "Welcome to Our Restaurant";
    const aboutText = document.createElement("p");
    aboutText.textContent =
      "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor";

    const open = document.createElement("div");
    open.setAttribute("id", "open");

    const hoursOpen = document.createElement("h2");
    hoursOpen.textContent = "Opening Hours";

    const monday = document.createElement("div");
    monday.setAttribute("class", "day");

    const mondayText = document.createElement("p");
    mondayText.textContent = "Monday - Friday";
    const mondayTime = document.createElement("p");
    mondayText.textContent = "8:00 am to 9:00 pm";

    const saturday = document.createElement("div");
    monday.setAttribute("class", "day");

    const saturdayText = document.createElement("p");
    saturdayText.textContent = "Saturday";
    const saturdayTime = document.createElement("p");
    saturdayText.textContent = "8:00 am to 9:00 pm";

    const sunday = document.createElement("div");
    monday.setAttribute("class", "day");

    const sundayText = document.createElement("p");
    sundayText.textContent = "Sunday";
    const sundayTime = document.createElement("p");
    sundayTime.textContent = "CLOSED";

    const rights = document.createElement("p");
    rights.textContent =
      "2022 Restaurants. All Right Reserved. Designed by Jroycodes";

    monday.appendChild(mondayText);
    monday.appendChild(mondayTime);

    saturday.appendChild(saturdayText);
    saturday.appendChild(saturdayTime);

    sunday.appendChild(sundayText);
    sunday.appendChild(sundayTime);

    open.appendChild(hoursOpen);
    open.appendChild(monday);
    open.appendChild(saturday);
    open.appendChild(sunday);

    about.appendChild(img1);
    about.appendChild(aboutUs);
    about.appendChild(aboutText);

    menuDiv.appendChild(about);
    menuDiv.appendChild(open);
    menuDiv.appendChild(rights);

    contentDiv.appendChild(menuDiv);
  });
}