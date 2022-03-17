api()
function adicionar() {
    let item = document.getElementById("adiciona").value; //pegando valor do input
    let itensLi = document.getElementById("itensAfazer");      //chamando minha li do TODO
    if (!item) {
        return;
    }
    itensLi.innerHTML += `
    <li class="list-group-item">
        <input type="checkbox" onclick="descolar(event.target)">
        <span contenteditable = "false" spellcheck = "false" class="btn-span">${item}</span>
        <button type="button" onclick="editar(event.target)" class="btn-editar btn btn-warning">Editar</button>
        <button type="button" onclick="salvar(event.target)" class= "btn-salvar btn btn-success hide">Salvar</button>
        <button id="botaoExcluir" class="btn btn-danger" onclick="removerElemento(event.target)">excluir</button>
    </li>
    `;
    document.getElementById("adiciona").value = ""
}

function editar(elementoClicado) {
    let botaoeditar = elementoClicado;
    let parentLi = botaoeditar.parentElement
    let botaosalvar = parentLi.getElementsByClassName("btn-salvar")[0];
    let spanEd = parentLi.getElementsByClassName("btn-span")[0];
    spanEd.contentEditable = "true"
    spanEd.classList.add("editavel")
    botaoeditar.classList.add("hide")
    botaosalvar.classList.remove("hide")
}

function salvar(elementoClicado) {
    let botaosalvar = elementoClicado;
    let parentLi = botaosalvar.parentElement;
    let botaoeditar = parentLi.getElementsByClassName("btn-editar")[0];
    let spanEd = parentLi.getElementsByClassName("btn-span")[0];
    spanEd.contentEditable = "false"
    spanEd.classList.remove("editavel")
    botaoeditar.classList.remove("hide")
    botaosalvar.classList.add("hide")
}

function removerElemento(elementoClicado) {
    elementoClicado.closest("li").remove()
}//seleciona o ancestral mais próximo

function descolar(elementoClicado) {
    let task = elementoClicado;
    if (task.checked) {
        let completedList = document.getElementById("itensFeitos");
        completedList.appendChild(task.parentElement)
    } else {
        let todoList = document.getElementById("itensAfazer");
        todoList.appendChild(task.parentElement)
    }
}

function api() {
    fetch('https://randomuser.me/api/')
        .then((resp) => resp.json())
        .then(function (data) {
            let usuario = data.results[0];   //array
            let nome = usuario.name.first;   //objeto
            document.getElementById("authors").innerHTML = "Olá, " + nome + "!"
        })
        .catch(function (error) {
            console.log("Olá , mundo !");
        });
}