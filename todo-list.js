let todoList = JSON.parse(localStorage.getItem('todos')) || [];;


function addTodo(){
    let inputText = document.querySelector('.js-input-text').value;
    let inputDate = document.querySelector('.js-input-date').value;
    let todoObject = {
        name: inputText,
        date: inputDate
    }
    todoList.push(todoObject);
    localStorage.setItem('todos', JSON.stringify(todoList));
}

function display(){
    let container = document.querySelector('.js-container');
    container.innerHTML = '';
    for(let i=0;i<todoList.length;i++){
        container.innerHTML += `
        <div>
            <div class='list-name'>${todoList[i].name}</div> 
            <div class='list-date'>${todoList[i].date}</div> 
            <div><button class="css-delete-btn" onclick='deleteItem(${i})'>Delete</button></div>
        </div>
        `;
    }
}

function deleteItem(i){
    todoList.splice(i,1);
    localStorage.setItem('todos', JSON.stringify(todoList));
    display();
}

function reset(){
    document.querySelector('.js-input-text').value = '';
    document.querySelector('.js-input-date').value='';
}
display();
