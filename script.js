/**Funções que precisa ter no site -  Funcionalidades
 * 1- Uma lixeira para excluir o input caso seja clicada, ligada apenas no input clicado.
 * 2- Ao clicar no + aparecer um novo input com a barra de texto para adcionar uma nova mensagem.
 * 3- No novo input criado, deve ter uma lixeira ligada a ele.
 * 
 * as cores das mensagens devem ser alternados com a palheta disponível.
 */


const root = document.getElementById("root")

function criarElemento(elementoHTML , classe = "", conteudo = ""){
    const elemento = document.createElement(elementoHTML)
    elemento.classList.add(classe)
    elemento.innerText = conteudo

    return elemento
}

const cabecalho = criarElemento("header", "cabecalho")
const cabecalhoTitulo = criarElemento("h1", "cabecalho__titulo", "let planejamento = [")
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


const data = new Date()
const nomeMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
const dia = data.getDate()
const mes = nomeMeses [data.getMonth()]
const ano = data.getFullYear()


const dataComposta = `${dia} de ${mes} de ${ano}`
const blocoTitulo = document.createElement("h3")
blocoTitulo.classList.add("bloco__titulo")
blocoTitulo.innerText = dataComposta
bloco.appendChild(blocoTitulo)


const blocoSubtitulo = document.createElement("h4")
blocoSubtitulo.classList.add("bloco__subtitulo")
blocoSubtitulo.innerText = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`

bloco.appendChild(blocoSubtitulo)

setInterval( function() {
    blocoSubtitulo.innerText = ""
    const dataHora = new Date()
    let hora = dataHora.getHours()
    if( hora < 10){
        hora = `0${hora}`
    }
    let minutos = dataHora.getMinutes()
    if( minutos < 10){
        minutos = `0${minutos}`
    }
    let  segundos = dataHora.getSeconds() 
    if( segundos < 10){
        segundos = `0${segundos}`
    }

    const horaComposta = `${hora}:${minutos}:${segundos}`
    blocoSubtitulo.innerText = horaComposta
}, 1000)

const botaoAdcionar = document.createElement("button")
botaoAdcionar.classList.add("principal__botao")
botaoAdcionar.innerText = ("+")
bloco.appendChild(botaoAdcionar)



const input1 = document.createElement("input")
input1.type = "checkbox"
input1.classList.add("input1")
input1.innerText = "Oi"
bloco.appendChild(input1)









