class Project {
    constructor(title, dueDate) {
        this.title = title;
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
    constructor(title, description, checklist) {
        this.title = title;
        this.description = description;
        this.checklist = false;
    }

    toggleChecklist() {
        this.checklist = !this.checklist;
    }
}

export {Project,Task};