const input = document.querySelector('#Serach_text');
const addButton = document.querySelector('#todo_button');
const li = document.querySelector('.OutputBox');

// ✅ When button is clicked
addButton.addEventListener("click", () => {
    const Todo = input.value.trim();
    if (Todo === "") {
        alert('please enter a task');
        return;
    }

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push({ text: Todo, completed: false });
    localStorage.setItem('todos', JSON.stringify(todos));

    addTodo(Todo, false);  // false = not completed
    input.value = "";
});

// ✅ Add todo to the DOM
function addTodo(TaskText, isCompleted) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isCompleted;

    div.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + TaskText));
    div.appendChild(label);

    const deletee = document.createElement('button');
    deletee.textContent = "Delete";
    div.appendChild(deletee);

    div.classList.add('todo-div');
    label.classList.add('todo-item');
    checkbox.classList.add('todo-checkbox');
    deletee.classList.add('todo-delete');
    li.appendChild(div);

    // ✅ On checkbox toggle, update localStorage
    checkbox.addEventListener('change', () => {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        const index = todos.findIndex(todo => todo.text === TaskText);
        if (index !== -1) {
            todos[index].completed = checkbox.checked;
            localStorage.setItem('todos', JSON.stringify(todos));
        }

        if (checkbox.checked) {
            alert('Congratulations! Task is completed');
        }
    });

    // ✅ On delete button click, remove from UI and localStorage
    deletee.addEventListener('click', () => {
        div.remove();
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos = todos.filter(todo => todo.text !== TaskText);
        localStorage.setItem('todos', JSON.stringify(todos));
    });
}

// ✅ On page load, restore todos from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        addTodo(todo.text, todo.completed);
    });
});
