const root = document.getElementById("root")

function criarElemento(elementoHTML , classe = "", conteudo = ""){
    const elemento = document.createElement(elementoHTML)
    elemento.classList.add(classe)
    elemento.innerText = conteudo

    return elemento
}

const cabecalho = criarElemento("header", "cabecalho")
const cabecalhoTitulo = criarElemento("h1", "cabecalho__titulo", "let atividadeDoDia = [")
cabecalho.appendChild(cabecalhoTitulo)
root.appendChild(cabecalho)



const principal = criarElemento("main", "principal")
root.appendChild(principal)

const bloco = criarElemento("div", "principal__bloco")
principal.appendChild(bloco)

const blocoCores = criarElemento("div", "bloco__cores")
bloco.appendChild(blocoCores)


const blocoCor1 = criarElemento("div", "cor1")
blocoCores.appendChild(blocoCor1)
const blocoCor2 = criarElemento("div", "cor2")
blocoCores.appendChild(blocoCor2)
const blocoCor3 = criarElemento("div", "cor3")
blocoCores.appendChild(blocoCor3)
