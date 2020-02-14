const inputE = document.getElementById('todo-input');
const submitE = document.getElementById('todo-submit');
const todoContainerE = document.getElementById('todo-container');

submitE.addEventListener('click', () => {
    // We get input value out
    const inputValue = inputE.value.trim();
    if (inputValue === '') return;
    inputE.value = '';

    // Creates a new element with the tagname 'div'
    const newTodoE = document.createElement('div');

    // Adding a class to the new element
    newTodoE.classList.add('todo-item');
    // Adding the text to the new element
    newTodoE.innerText = inputValue;

    newTodoE.addEventListener('click', () => {
        todoContainerE.removeChild(newTodoE);
    });

    // Appends the new element to the DOM
    todoContainerE.appendChild(newTodoE);
});