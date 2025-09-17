class Project {
    constructor(title,description,dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.tasks = [];
    }
    
    addTask(task) {
        this.tasks.push(task);
        console.log(this.tasks);
    }
    
    removeTask(task) {
        this.tasks.filter(task);
    }
}

class Task {
    constructor(title, checklist) {
        this.title = title;
        this.checklist = checklist;
    }
}

export {Project,Task};