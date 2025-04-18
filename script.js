// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const title = document.getElementById('main-title');
    const content = document.getElementById('content');
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeStyleBtn = document.getElementById('change-style-btn');
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const elementToToggle = document.getElementById('element-to-toggle');
    const itemList = document.getElementById('item-list');

    // 1. Change text content dynamically
    changeTextBtn.addEventListener('click', function() {
        content.textContent = 'The text has been changed dynamically!';
        title.textContent = 'Updated Title';
    });

    // 2. Modify CSS styles via JavaScript
    changeStyleBtn.addEventListener('click', function() {
        content.style.color = 'blue';
        content.style.fontSize = '20px';
        content.style.border = '1px solid #ccc';
        content.style.padding = '10px';
    });

    // 3. Add or remove an element when a button is clicked
    toggleElementBtn.addEventListener('click', function() {
        if (elementToToggle.style.display === 'none') {
            elementToToggle.style.display = 'block';
            toggleElementBtn.textContent = 'Hide Element';
        } else {
            elementToToggle.style.display = 'none';
            toggleElementBtn.textContent = 'Show Element';
        }
    });

    // Additional DOM manipulation examples
    // Adding a new list item
    const newItem = document.createElement('li');
    newItem.textContent = 'Item 3 (added dynamically)';
    itemList.appendChild(newItem);

    // Changing class dynamically
    setTimeout(() => {
        elementToToggle.classList.remove('highlight');
    }, 2000);
});