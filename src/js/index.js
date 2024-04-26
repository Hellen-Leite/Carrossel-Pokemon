const botaoAvancar= document.getElementById("btn-avancar")
const botaoVoltar = document.querySelector(".btn-voltar")
const cartaoPersonagem= document.querySelectorAll(".cartao")

let cartaoAtual=0

botaoAvancar.addEventListener("click", function(){
    if(cartaoAtual===cartaoPersonagem.length -1){
        return
    }
    cartaoAtual++

    removerSelecaoDoCartao()


    adicionarSelecaoNoCartao(cartaoAtual)


    mostrarOuEsconderSetas(cartaoAtual)
})
botaoVoltar.addEventListener("click", function(){
    if(cartaoAtual===0){
        return
    }

    cartaoAtual--
    
    
    removerSelecaoDoCartao()
    
    adicionarSelecaoNoCartao(cartaoAtual)


    mostrarOuEsconderSetas(cartaoAtual)
})



function adicionarSelecaoNoCartao(indicieCartao) {
    cartaoPersonagem[indicieCartao].classList.add("selecionado")
}


function removerSelecaoDoCartao() {
    const cartaoAberto= document.querySelector(".selecionado")
    cartaoAberto.classList.remove("selecionado")
}


function mostrarOuEsconderSetas(indicieCartao){
    const naoEhAPrimeiraImagem= indicieCartao!==0
    if(naoEhAPrimeiraImagem){
        botaoVoltar.classList.remove("opacidade")
    }
    else{botaoVoltar.classList.add("opacidade")

    }
    const ehAUltimaImagem= indicieCartao!==0 && indicieCartao === cartaoPersonagem.length - 1
    console.log(ehAUltimaImagem)
    if(ehAUltimaImagem){
        botaoAvancar.classList.toggle("opacidade")
    }
    else{
        botaoAvancar.classList.remove("opacidade")
    }
}



