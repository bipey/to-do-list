let btn = document.querySelector("#btn");
let inputs = document.querySelector("#inputs");
let todos = document.querySelector("#todo-list");

btn.addEventListener('click', (e) => {
    e.preventDefault();
if(inputs.value!=""){
    let list = document.createElement('div');
    list.classList.add("todo-class");
    list.innerHTML += `<div class="todo-input"><input type="checkbox">${inputs.value}</div>
                <div class="todo-button">
                <button class="btn remove-btn">Remove</button>`;
    todos.appendChild(list);
    inputs.value = '';
    
    let removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentNode.parentNode.remove(); 
        });
    });}
});
