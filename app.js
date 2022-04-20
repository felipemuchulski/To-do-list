'use strict';

/*<label class="todo__item">
                <input type="checkbox">
                <p>Adicionando item</p>
                <input type="image" img class="img" src="../img/trash.png" />
            </label>*/

const criarItem = (text) => {
    const item = document.createElement('label')
    item.classList.add('todo__item');
    item.innerHTML = `<input type="checkbox">
    <p>${text}</p>
    <input type="image" img class="img" src="../img/trash.png" />
    `

    document.getElementById('todoList').appendChild(item)
}