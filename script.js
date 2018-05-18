var toDoList = document.querySelector('.todo-list');
var addTask = document.querySelector('.add-task');
var addBtn = document.querySelector('.add-button');
var deleteBtn = document.querySelector('.delte');

var arrayTask = [];


addBtn.addEventListener('click', addToDoItem);
deleteBtn.addEventListener('click');

function addToDoItem(){
    if(addTask.value === ''){
       return alert('Поле не может быть пустым!');
    }
    arrayTask.unshift(createTaskItem());
    addTask.value = '';
    showTask();
    deleteToDoItem();
}

function deleteToDoItem(){
    var toDoItem = document.querySelector('.todo-item');
    var deleteBtn = document.querySelector('.delete');
    deleteBtn.addEventListener('click', deleteToDoItem);
    
    arrayTask.pop();
    arrayTask.shift();
    
}

function showTask(){
    for(var i = 0; i < arrayTask.length; i++){
        toDoList.appendChild(arrayTask[i]);
    }
}

function createTaskItem(){
    var toDoItem = document.createElement('li');
    toDoItem.className = 'todo-item';

    var checkbox = document.createElement('input');
    checkbox.type =  'checkbox';
    checkbox.className = 'checkbox';
    
    var toDoTask = document.createElement('span');
    toDoTask.innerHTML = addTask.value;
    toDoTask.className = 'todo-task';
        
    var deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete';
    deleteBtn.value = 'Удалить';
    
    toDoItem.appendChild(checkbox);
    toDoItem.appendChild(toDoTask);
    toDoItem.appendChild(deleteBtn);    

    return toDoItem;  
}
// console.log(toDoItem);
console.log(createTaskItem());