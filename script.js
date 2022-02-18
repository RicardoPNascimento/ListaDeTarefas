let tarefas = [];
var count = 0;

function adicionar() {
    let item = document.getElementById("adiciona").value; //pegando valor do input
    let itensLi = document.getElementById("itensAfazer");      //chamando minha li do TODO
    tarefas.push(item);
    itensLi.innerHTML += `
    <li class="list-group-item">
        <input type="checkbox" onclick="descolar(this.id)" id="${count}">
        <span contenteditable = "true" spellcheck = "false" class="editavel">${tarefas[count]}</span>
        <button id="botaoExcluir" class="btn btn-warning" onclick="removerElemento(event.target)">excluir</button>
    </li>
    `;
    count++
    document.getElementById("adiciona").value = ""
}

function descolar(id) {
    let task = document.getElementById(id); //checkbox
    let completedList = document.getElementById("itensFeitos"); //minha lista completed
    let todoList = document.getElementById("itensAfazer");  //minha lista todo , propriedade
    if (task.checked) {
        completedList.appendChild(task.parentElement)

    } else {
        todoList.appendChild(task.parentElement)
    }
}//inserir elemento filho no pai

function removerElemento(elementoClicado) {
    elementoClicado.closest("li").remove();
}//seleciona o ancestral mais próximo