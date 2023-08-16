
let taskArray=[];
 const addTaskButton=document.getElementById("addTaskButton");
 const taskList=document.getElementById("taskList");
 const taskInput=document.getElementById("taskInput");

function getTaskFromLocalStorage(){
    return taskArray;
}

//get user input

// validate the entered input
function validateInput(){
    const taskInput=document.getElementById("inputBox");
    const error=document.getElementById("error");

    let userInput=taskInput.value;
    if(userInput==Number|| userInput==""){
       error.textContent="Please Enter valid colour name";
    return;
} else{
    return userInput;
}
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