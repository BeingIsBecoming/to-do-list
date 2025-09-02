export default function createProject() {
    const addProjectButton = document.querySelector('.add-project');
    const projectList = document.querySelector('.project-list');
    
    addProjectButton.addEventListener('click', (e) => {
        const newProject = document.createElement('li');
        newProject.innerHTML = '✨ - NEW PROJECT';
        projectList.appendChild(newProject);  
    });
}