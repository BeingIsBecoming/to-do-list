import "./styles.css";
import { greeting } from "./greeting.js";
import todaysDate from "./date.js";
import createTask from "./task.js";
import createProject from "./project.js";

document.getElementById("date-today").appendChild(todaysDate());

createTask();
createProject();

console.log(greeting);
