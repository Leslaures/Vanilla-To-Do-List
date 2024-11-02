
//////////Fonction pour récupérer l'input au clic sur le bouton//////////
const addTaskSubmitBtn = document.querySelector("#taskSubmitBtn");
const tasksArray = [];
const taskList = document.querySelector("#toDoList")
const todoInput = document.querySelector("#todoInput");

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
    addTask(todoInput.value);
}
)

//////////Fonction pour supprimer le li au clic sur le BinBtn//////////

const removeTodo = (event) => {
    const todoInput = event.target;
    const liToremove= todoInput.closest("li");
    const arrayContent = liToremove.innerText;

    const arrayContentIndex = tasksArray.indexOf(arrayContent);
    tasksArray.splice(arrayContentIndex,1);

    if (todoInput.classList.contains("remove") || todoInput.closest(".remove")) {
        liToremove.remove();
    }

};

taskList.addEventListener('click', removeTodo);