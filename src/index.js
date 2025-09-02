import "./styles.css";
import { greeting } from "./greeting.js";
import todaysDate from "./date.js";
import {createTask,deleteTask} from "./task.js";
import createProject from "./project.js";

document.getElementById("date-today").appendChild(todaysDate());

createTask();
deleteTask();
createProject();

console.log(greeting);
