
let taskArray=[];
 const addTaskButton=document.getElementById("addTaskButton");
 const taskList=document.getElementById("taskList");
 const taskInput=document.getElementById("taskInput");

function getTaskFromLocalStorage(){
    if(taskArray.pop==null){
        return [];
    }
    return JSON.parse(taskArray.pop);
}
function createTaskElement(taskObj) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("taskItem");
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.checked = taskObj.completed;
    checkbox.addEventListener("change", function () {
        taskObj.completed = checkbox.checked;
        taskTextElement.classList.toggle("completed", taskObj.completed);
        updateTasksInLocalStorage();
    });
    const taskTextElement = document.createElement("span");
    taskTextElement.classList.add("taskText");
    taskTextElement.textContent = taskObj.text;
    taskTextElement.classList.toggle("completed", taskObj.completed);
  
    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "X";
    removeButton.addEventListener("click", function () {
        deleteTask(taskObj);
        renderTasks();
    });
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(removeButton);
  
    return taskItem;
}
function renderTasks(){
    taskList.innerHTML="";
    for(let i=0;i<taskArray.length;i++){
        createTaskElement(taskArray[i]);
    }
    return;
    taskList.appendChild(taskElement);
}
//get user input

// validate the entered input
function validateInput(){
    const taskInput=document.getElementById("taskInput");
    const error=document.getElementById("error");

    let taskText=taskInput.value;
    if(taskText==Number|| taskText==""){
       error.textContent="Please Enter valid input";
    return;
} else{
    return taskText;
}

const newTask=createTaskElement(taskText);
taskArray.push(newTask);
updateTasksInLocalStorage();
taskInput.value="";
renderTasks();
}
//put input value in array
function storeTaskArray(){
    taskArray.push(validateInput());
}
// show entered value as list after click on add button
function addValueToList(){
    
   
    const taskList=document.getElementById("listElements");
    // document.createElement(ul);
    for(let i=0;i<taskArray.length;i++){
    let li= document.createElement("li");
    li.classList.add(li);
    taskList.textContent=taskArray[i];
    }
}
//addTaskButton.addEventListener("click",function() {
  function addText(){   
        validateInput();
    storeTaskArray();
    addValueToList();
};

function getTasksFromLocalStorage(){

}