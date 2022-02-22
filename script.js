let tarefas = [];
var count = 0;

function adicionar() {
    let item = document.getElementById("adiciona").value; //pegando valor do input
    let itensLi = document.getElementById("itensAfazer");      //chamando minha li do TODO
    if (!item) {
        return;
    }
    tarefas.push(item);
    itensLi.innerHTML += `
    <li class="list-group-item">
        <input type="checkbox" onclick="descolar(event.target)">
        <span contenteditable = "false" spellcheck = "false" class="btn-span">${tarefas[count]}</span>
        <button type="button" onclick="editar(event.target)" class="btn-editar btn btn-warning">Editar</button>
        <button type="button" onclick="salvar(event.target)" class= "btn-salvar hide btn btn-success">Salvar</button>
        <button id="botaoExcluir" class="btn btn-danger" onclick="removerElemento(event.target)">excluir</button>
    </li>
    `;
    count++
    document.getElementById("adiciona").value = ""
}

function editar(elementoClicado) {
    let botaoeditar=elementoClicado;
    let parentLi=botaoeditar.parentElement  
    let botaosalvar=parentLi.getElementsByClassName("btn-salvar")[0];
    let spanEd=parentLi.getElementsByClassName("btn-span")[0];
    spanEd.contentEditable="true"
    spanEd.classList.add("editavel")
    botaoeditar.classList.add("hide")
    botaosalvar.classList.remove("hide")
    
}

function salvar(elementoClicado) {
    let botaosalvar=elementoClicado;
    let parentLi=botaosalvar.parentElement  
    let botaoeditar=parentLi.getElementsByClassName("btn-editar")[0];
    let spanEd=parentLi.getElementsByClassName("btn-span")[0];
    spanEd.contentEditable="false"
    spanEd.classList.remove("editavel")
    botaoeditar.classList.remove("hide")
    botaosalvar.classList.add("hide")
}

function removerElemento(elementoClicado) {
    elementoClicado.closest("li").remove()
}//seleciona o ancestral mais próximo

function descolar(elementoClicado) {
    let task = elementoClicado; //checkbox
    let completedList = document.getElementById("itensFeitos"); //minha lista completed
    let todoList = document.getElementById("itensAfazer");  //minha lista todo , propriedade
    if (task.checked) {
        completedList.appendChild(task.parentElement)
        document.getElementById(id + "s").classList.add("temp")
    } else {
        todoList.appendChild(task.parentElement)
        document.getElementById(id + "s").classList.remove("temp")
    }
}
//inserir elemento filho no pai