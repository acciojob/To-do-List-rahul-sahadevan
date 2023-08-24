//your code here

const input = document.getElementById("newTodoInput");
const todo = document.getElementById("addTodoBtn");

todo.addEventListener("click",() =>{
    const list = document.createElement("li");
    const ol = document.getElementById("todoList");
    const val = input.value;
    if(val != ""){
        list.innerText = val;
        ol.append(list);
        input.value= "";
    }
})