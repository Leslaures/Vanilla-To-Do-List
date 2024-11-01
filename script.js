
//////////Fonction pour récupérer l'input au clic sur le bouton//////////
const addTaskSubmitBtn = document.querySelector("#taskSubmitBtn");
const tasksArray = [];
const taskList = document.querySelector("#tasksList")
const input = document.querySelector("#input");

function addTask(task) {
    tasksArray.push(input.value);
    const newLi = document.createElement("li");
    const newBtn = document.createElement("button");
    newLi.innerText = input.value ;
    taskList.append(newLi, newBtn);
    input.value = "";
}

addTaskSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addTask(input.value);
}
)

