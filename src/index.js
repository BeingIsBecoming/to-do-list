import "./styles.css";
import todaysDate from "./date.js";
import createTask from "./task.js";

document.getElementById("date-today").appendChild(todaysDate());

// Call Modules
createTask();