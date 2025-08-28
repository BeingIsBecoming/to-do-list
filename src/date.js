export default function todaysDate() {
    const today = new Date();
    const formatted = today.toLocaleDateString();

    const div = document.createElement('div');
    div.textContent = formatted;
    
    return div;
}