const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const tasksContainer = document.querySelector(".tasks-container");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();

    console.log(inputIsValid);

    if(!inputIsValid){
      return inputElement.classList.add("error");
    }

    const taskItemContainer = document.createElement("div");
     taskItemContainer.classList.add("task-item");

     const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;

    taskContent.addEventListener("click", () => handleClick(taskContent));

    const deleteItem = document.createElement("i");
    deleteItem.classList.add("fa-regular");
    deleteItem.classList.add("fa-trash-can");

    deleteItem.addEventListener("click", () => handleDeleteClick(taskItemContainer))

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemContainer);

    inputElement.value = "";
};

const handleClick = (taskContent) => {
    const tasks = tasksContainer.childNodes;
  
    for (const task of tasks) {
        const firstChild = task.firstChild;
        if (firstChild && firstChild.isSameNode(taskContent)) {
            firstChild.classList.toggle("completed");
        }
    }
};
 
const handleDeleteClick = (taskItemContainer, taskContent) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        const firstChild = task.firstChild;
        if (firstChild && firstChild.isSameNode(taskContent)){
            task.remove();
            break;
        }    
    }
}

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if(inputIsValid) {
        return inputElement.classList.remove("error");
    }
}

addTaskButton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange());