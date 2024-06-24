export function menuLoad() {
  const menuBtn = document.getElementById("menu");
  menuBtn.addEventListener("click", () => {
    const contentDiv = document.querySelector("#content");

    // Clear existing content
    contentDiv.innerHTML = "";

    // Create the main container div
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "container");

    // Create a dish container
    const dish1 = document.createElement("div");
    dish1.setAttribute("id", "dish1");

    // Create and set the content for the dish
    const img1 = document.createElement("img");
    img1.src = image1;
    img1.alt = "Lumpia with suace";
    const dishName = document.createElement("h2");
    dishName.textContent = "Lumpia with suace";
    const dishText = document.createElement("p");
    dishText.textContent =
      "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor";

    const dish2 = document.createElement("div");
    dish1.setAttribute("id", "dish2");

    const img2 = document.createElement("img");
    img2.src = image2;
    img2.alt = "Fish and Veggie";
    const dish2Name = document.createElement("h2");
    dish2Name.textContent = "Fish and Veggie";
    const dish2Text = document.createElement("p");
    dish2Text.textContent =
      "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor";

    const dish3 = document.createElement("div");
    dish1.setAttribute("id", "dish3");

    const img3 = document.createElement("img");
    img3.src = image3;
    img3.alt = "Tofu Chili";
    const dish3Name = document.createElement("h2");
    dish3Name.textContent = "Tofu Chili";
    const dish3Text = document.createElement("p");
    dish3Text.textContent =
      "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor";

    const dish4 = document.createElement("div");
    dish1.setAttribute("id", "dish4");

    const img4 = document.createElement("img");
    img4.src = image4;
    img4.alt = "Lumpia with suace";
    const dish4Name = document.createElement("h2");
    dish4Name.textContent = "Egg and Cucumber";
    const dish4Text = document.createElement("p");
    dish4Text.textContent =
      "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor";

    // Append the content to the dish container
    dish1.appendChild(img1);
    dish1.appendChild(dishName);
    dish1.appendChild(dishText);
    dish2.appendChild(img2);
    dish2.appendChild(dish2Name);
    dish2.appendChild(dish2Text);
    dish3.appendChild(img3);
    dish3.appendChild(dish3Name);
    dish3.appendChild(dish3Text);
    dish4.appendChild(img4);
    dish4.appendChild(dish4Name);
    dish4.appendChild(dish4Text);
    // Append the dish container to the main container
    menuDiv.appendChild(dish1);
    menuDiv.appendChild(dish2);
    menuDiv.appendChild(dish3);
    menuDiv.appendChild(dish4);

    // Append the main container to the document body
    contentDiv.appendChild(menuDiv);
  });
}
import image1 from "./images/dish1.jpg";
import image2 from "./images/dish2.jpg";
import image3 from "./images/dish3.jpg";
import image4 from "./images/dish4.jpg";