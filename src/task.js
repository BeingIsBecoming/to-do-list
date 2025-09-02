export default function createTask() {
    const addTaskButton = document.querySelector('.add-task');
    const taskList = document.querySelector('.task-list');
    const addTaskButtonParent = addTaskButton.parentElement;
    
    addTaskButton.addEventListener('click', (e) => {
        const newTask = document.createElement('li');
        newTask.innerHTML = '<input type = checkbox><span>USER INPUT HERE</span><button id="delete-task">-</button>';
        taskList.removeChild(addTaskButtonParent);
        taskList.appendChild(newTask);
        taskList.appendChild(addTaskButtonParent);
    });
}