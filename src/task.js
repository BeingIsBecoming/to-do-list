const taskList = document.querySelector('.task-list');


export function createTask() {
    const addTaskButton = document.querySelector('.add-task');
    const addTaskButtonParent = addTaskButton.parentElement;
    
    addTaskButton.addEventListener('click', (e) => {
        const newTask = document.createElement('li');
        newTask.innerHTML = '<input type = checkbox><span>New Task</span><button id="delete-task">-</button>';
        taskList.removeChild(addTaskButtonParent);
        taskList.appendChild(newTask);
        taskList.appendChild(addTaskButtonParent);
    });
}

export function deleteTask() {
    taskList.addEventListener('click', (e)=> {
        if(e.target.classList.contains('delete-task')) {
            e.target.closest('li').remove();
        }
    });
}