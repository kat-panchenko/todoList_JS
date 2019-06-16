const addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');

let todoList = [];


let displayTodo = () => {
    let displayMessage = '';

    todoList.forEach((item, i) => {

        let checked = item.checked ? 'checked' : '';

        displayMessage += `
      <li>
        <input type="checkbox" id="item_${i}" ${checked}>
        <label for="item_${i}">${item.todo}</label>
      </li>        
     `;
    });
    todo.innerHTML = displayMessage;
};


if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayTodo();
}

addButton.addEventListener('click', () => {
    let newTodo = {
        todo: addMessage.value,
        checked: false
    };

    todoList.push(newTodo);

    displayTodo();

    localStorage.setItem('todo', JSON.stringify(todoList));
});

todo.addEventListener('change', (event)=>{
    // let idInput = event.target.getAttribute('id');
    // let forLabel = ;
    // let valueLabel = forLabel.innerHTML;

    // ниже тоже самое в одну строчку и без получения атрибута, обращаемся напрямую к свойству id

    let valueLabel = todo.querySelector('[for='+ event.target.id +']').innerHTML;

    todoList.forEach((item)=>{
        if(item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });

});

