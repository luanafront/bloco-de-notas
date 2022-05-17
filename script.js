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
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

const divNotas = document.createElement("div")
divNotas.classList.add("div__notas")
bloco.appendChild(divNotas)

const botaoAdcionar = document.createElement("button")
botaoAdcionar.classList.add("principal__botao")
botaoAdcionar.innerText = ("+")
bloco.appendChild(botaoAdcionar)


function adcionarNota(){
    let podeInserir = true
    let ultimoInput = divNotas.lastChild
    if (ultimoInput !== null){
        let campoTextoVerificar = ultimoInput.childNodes[1]
        if (campoTextoVerificar.className.includes("campo__texto--add") === false){
            podeInserir = false
        }
    }
 
    if(podeInserir){
        const listaCores = [ 
            "#2EC4B6",
            "#46B1FF",
            "#AAA1C8",
            "#EE7878"
        ]
        
        let cor = listaCores[random(0, listaCores.length - 1)]
    
        const listaNotas = document.createElement("div")
        listaNotas.classList.add("lista__notas")
        divNotas.appendChild(listaNotas)
    
    
    
        const checkbox = document.createElement("div")
        checkbox.classList.add("checkbox")
        listaNotas.appendChild(checkbox)
    
        const reta1 = document.createElement("div")
        reta1.classList.add("reta1")
        checkbox.appendChild(reta1)
    
        const reta2 = document.createElement("div")
        reta2.classList.add("reta2")
        checkbox.appendChild(reta2)
    
        const campoTexto = document.createElement("input")
        campoTexto.classList.add("campo__texto")
        campoTexto.style.color = cor
        listaNotas.appendChild(campoTexto)
    
        campoTexto.addEventListener("blur",function(e){
            let valor = e.target.value
            if( valor.length > 0){
    
                campoTexto.classList.add("campo__texto--add")
            } else {
                campoTexto.classList.remove("campo__texto--add")  
            }
        } )
    
        const lixeira = document.createElement("img")
        lixeira.classList.add("lixeira")
        lixeira.src = "./assests/lixeira.png"
        listaNotas.appendChild(lixeira)
        
        lixeira.addEventListener("click", function(){
            divNotas.removeChild(listaNotas)
    
        })
    
        checkbox.addEventListener("click", function(e){
    
            if (checkbox.className === "checkbox"){
    
                checkbox.classList.remove("checkbox")
                reta1.classList.remove("reta1")
                reta2.classList.remove("reta2")
    
                checkbox.classList.add("checkbox__clicado")
                reta1.classList.add("reta1__clicada")
                reta2.classList.add("reta2__clicada")
            }
    
            else if(checkbox.className === "checkbox__clicado"){
                checkbox.classList.remove("checkbox__clicado")
                reta1.classList.remove("reta1__clicada")
                reta2.classList.remove("reta2__clicada")
    
                checkbox.classList.add("checkbox")
                reta1.classList.add("reta1")
                reta2.classList.add("reta2")
            }
        })
    }

}

botaoAdcionar.addEventListener("click", adcionarNota)

