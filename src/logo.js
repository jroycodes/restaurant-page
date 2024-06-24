import logo1 from "./images/logo.jpg";

export function loadLogo() {
  const container = document.getElementById("nav");
  const logoDiv = document.createElement("div");
  logoDiv.setAttribute("class", "logo");
  const logo = document.createElement("img");
  logo.src = logo1;
  logo.alt = "Restaurant page";

  logoDiv.appendChild(logo);
  container.appendChild(logoDiv);
}
