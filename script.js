
//////////Fonction pour récupérer l'input au clic sur le bouton//////////
const addTaskSubmitBtn = document.querySelector("#taskSubmitBtn");
const tasksArray = [];
const taskList = document.querySelector("#toDoList")
const todoInput = document.querySelector("#todoInput");

function verifInput () {
    if (todoInput.value === "") {
        alert("Please enter a task");
        return false;        
    } else if (tasksArray.includes(todoInput.value)) {
        alert("This task is already in the list. Just do it Bitch!");
        return false;
    }    
    return true;
}

function addTask(task) {
    tasksArray.push(todoInput.value);
    const newLi = document.createElement("li");
    newLi.innerText = todoInput.value ;

    const newBtn = document.createElement("button");
    newBtn.classList = "remove";
    newBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    newLi.appendChild(newBtn);
    taskList.append(newLi);

    todoInput.value = "";
}

addTaskSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (verifInput(todoInput.value)) addTask(todoInput.value);
}
)

//////////Fonction pour supprimer le li au clic sur le BinBtn//////////
console.log(tasksArray);
const removeTodo = (event) => {
    const todoInput = event.target;
    const liToremove= todoInput.closest("li");
    const arrayContent = liToremove.innerText;

    const arrayContentIndex = tasksArray.indexOf(arrayContent);
    tasksArray.splice(arrayContentIndex,1);
   console.log(tasksArray);


    if (todoInput.classList.contains("remove") || todoInput.closest(".remove")) {
        liToremove.remove();
    }

};

taskList.addEventListener('click', removeTodo);