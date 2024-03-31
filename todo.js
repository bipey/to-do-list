let btn=document.querySelector("#btn")
btn.addEventListener('click',(e) => {
        e.preventDefault();
        let inputs = document.querySelector("#inputs").value;
        let todos = document.getElementById("todo-list");
        let divTodo=document.createElement('div')
        if(inputs!==""){
            todos.appendChild(divTodo);
            divTodo.className="lists_todo"
            lists_todo=document.querySelectorAll('.lists_todo')
            lists_todo.forEach((name)=>{
                divTodo.style.display = "flex"; 
            divTodo.style.justifyContent="space-between"
            divTodo.style.alignItems = "center";
            divTodo.style.background="gray"
            divTodo.innerHTML = `<div id="texts">
            <input type="checkbox" id="check">${inputs}
            </div>
            <div id="todo_btns"> 
            <button id="edit" class="todo_btns"> Edit</button>
            <button id="remove" class="todo_btns"> Remove</button>`;

            let todos_text=document.querySelector("#texts")
            todos_text.style.display = "flex"; 
            todos_text.style.justifyContent="space-between"
            todos_text.style.alignItems = "center";
            todos_text.style.gap="5px"
            todos_text.style.fontSize="20px"

            document.getElementById("inputs").value = "";
            let check=document.querySelector("#check")
            check.style.margin="5px"
            check.style.height="25px"
            check.style.width="25px"

            let todo_btns=document.querySelector("#todo_btns")
            todo_btns.style.display="flex"
            todo_btns.style.justifyContent="space-between"
            todo_btns.style.padding="10px"
            todo_btns.style.alignItems="right"
            todo_btns.style.gap="5px"
            
            let edt_rmv=document.querySelectorAll(".todo_btns")
            edt_rmv.forEach((buttons)=>{
                buttons.style.padding="5px"
                buttons.style.border='1px solid black'
                buttons.style.background='yellow'
                buttons.style.borderRadius="10px"
                buttons.style.cursor="pointer"
            })
            })
            
            let remove=document.querySelector("#remove")
            remove.addEventListener('click',(e)=>{
                

            })

            
        }
     

        

    })