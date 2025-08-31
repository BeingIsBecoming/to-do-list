export default function todaysDate() {
    const div = document.createElement('div');
    div.textContent = new Date().toLocaleDateString();
    
    return div;
}