import "./styles.css";
import { greeting } from "./greeting.js";
import todaysDate from "./date.js";

document.getElementById("date-today").appendChild(todaysDate());
console.log(greeting);