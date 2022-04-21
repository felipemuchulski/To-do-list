'use strict';

let banco = [
    {'tarefa' : 'Estudar JS'},
    {'tarefa' : 'Netflix'},

]
/*<label class="todo__item">
                <input type="checkbox">
                <p>Adicionando item</p>
                <input type="image" img class="img" src="../img/trash.png" />
            </label>*/

const criarItem = (tarefa) => {
    const item = document.createElement('label')
    item.classList.add('todo__item');
    item.innerHTML = `<input type="checkbox">
    <p>${tarefa}</p>
    <input type="image" img class="img" src="../img/trash.png" />
    `

    document.getElementById('todoList').appendChild(item)
}

const atualizarTela = () => {
    banco.forEach(item => criarItem(item.tarefa));
}

atualizarTela();