const input = document.querySelector('#Serach_text');
const addButton = document.querySelector('#todo_button');
const li = document.querySelector('.OutputBox');

let Todo;

addButton.addEventListener("click", () => {


    // console.log(input.value);
    Todo = input.value.trim();

    if (Todo === "") {
        alert('please enter a task')
        return;
    }

    //Create a new label and checkbox for each Todo 
    const div = document.createElement('div')
    const label = document.createElement('label')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    div.appendChild(checkbox)
    label.appendChild(document.createTextNode(" " + Todo));
    div.appendChild(label)
    //create a Delete button
    const deletee = document.createElement('button');
    deletee.textContent = "Delete";
    div.appendChild(deletee)

    //styling 
    div.classList.add('todo-div')
    label.classList.add('todo-item');
    checkbox.classList.add('todo-checkbox');
    deletee.classList.add('todo-delete')
    document.querySelector('.OutputBox').appendChild(div);
    input.value = ""

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            alert('Congratulation task is completed')
        }
    })

    deletee.addEventListener('click', () => {
        // console.log(deletee);
        div.remove()
    })


})






