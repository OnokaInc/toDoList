var toDoList = document.querySelector('.todo-list');
var addTask = document.querySelector('.add-task');
var addBtn = document.querySelector('.add-button');

function createTaskItem(){
    var toDoItem = document.createElement('li');
    toDoItem.className = 'todo-item';

    var checkbox = document.createElement('input');
    checkbox.type =  'checkbox';
    checkbox.className = 'checkbox';
    
    var toDoTask = document.createElement('span');
    toDoTask.innerText = addTask.value;
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

function addToDoItem(){
    if(addTask.value){
        var toDoItem = createTaskItem();
        toDoList.appendChild(toDoItem);
        bindTaskEvents(toDoItem);
        addTask.value = '';
    }else if(addTask.value === ''){
        alert('Поле не может быть пустым!');
    }
}

addBtn.onclick = addToDoItem;

function bindTaskEvents(toDoItem){
    var deleteBtn = toDoItem.querySelector('.delete');

    deleteBtn.onclick = deleteToDoItem;
}

function deleteToDoItem(){
    var toDoItem = this.parentNode;
    toDoList.removeChild(toDoItem);
}


