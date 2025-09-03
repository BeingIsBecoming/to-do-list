class Project {
    static allTasks = [];
    
    constructor(title,description,dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

}
class Task extends Project {
    constructor()
}