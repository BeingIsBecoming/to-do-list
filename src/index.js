import "./styles.css";
import todaysDate from "./date.js";
import {createTask,deleteTask} from "./task.js";
import createProject from "./project.js";
import {Project, Task}from "./todo.js";

document.getElementById("date-today").appendChild(todaysDate());

createTask();
deleteTask();
createProject();

const projectTest = new Project("FBI", "SSBD Art Installation","Sep.");
const taskTest = new Task("APK Wrapper", "Sideload Mobile App");
window.projectTest = projectTest;
window.taskTest = taskTest;

console.log("V V V MODULE IMPORT & CLASS TESTING AREA V V V");
console.log(projectTest);
console.log(taskTest);
