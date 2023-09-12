const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    const nome = evento.target.elements['nome']
    const qtd = evento.target.elements['quantidade']

    criaElemento(nome.value, qtd.value)

    nome.value = ""
    qtd.value = ""


})

function criaElemento(nome, quantidade){
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    
    lista.appendChild (novoItem)

    localStorage.setItem("nome", nome)
    localStorage.setItem("quantidade", qtd)
}