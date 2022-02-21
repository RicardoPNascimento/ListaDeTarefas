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
        <input type="checkbox" onclick="descolar(this.id)" id="${count}">
        <span contenteditable = "false" spellcheck = "false"  id="${count + "s"}">${tarefas[count]}</span>
        <button onclick="editar('${tarefas[count]}')" class="btn btn-warning" id="esconderEditar">Editar</button>
        <button onclick="salvar('${tarefas[count]}')" class= "hide btn btn-success" id="esconderSalvar">Salvar</button>
        <button id="botaoExcluir" class="btn btn-danger" onclick="removerElemento(event.target)">excluir</button>
    </li>
    `;
    count++
    document.getElementById("adiciona").value = ""
}

function editar(indice_tarefa) {
    let botaoeditar=document.getElementById("esconderEditar");
    let botaosalvar=document.getElementById("esconderSalvar");//botão salvar
    let indice = tarefas.indexOf(indice_tarefa)
    document.getElementById(indice + "s").contentEditable = "true";
    document.getElementById(indice + "s").classList.add("editavel");
    botaosalvar.style.display = "inline-block";//mostrar
    botaoeditar.style.display="none"; 
}

function salvar(indice_tarefa) {
    let botaoeditar=document.getElementById("esconderEditar");
    let botaosalvar=document.getElementById("esconderSalvar");
    let indice = tarefas.indexOf(indice_tarefa)
    document.getElementById(indice + "s").contentEditable = "false";
    document.getElementById(indice + "s").classList.remove("editavel");
    botaoeditar.style.display="inline-block";
    botaosalvar.style.display="none";
}

function removerElemento(elementoClicado) {
    elementoClicado.closest("li").remove()
}//seleciona o ancestral mais próximo

function descolar(id) {
    let task = document.getElementById(id); //checkbox
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