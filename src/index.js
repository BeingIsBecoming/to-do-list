import "./styles.css";
import { greeting } from "./greeting.js";
import todaysDate from "./date.js";

// const image = document.createElement("img");
// image.src = somaImage;
// document.body.appendChild(image);

document.getElementById("date-today").appendChild(todaysDate());
console.log(greeting);