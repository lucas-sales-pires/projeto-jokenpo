
let resposta = document.getElementById('res')
let pedra = document.getElementById('pedra')
let papel = document.getElementById('papel')
let tesoura = document.getElementById('tesoura')
let opcoes = document.getElementsByClassName('opcao')
let lista =['pedra','papel','tesoura']
let jogadaM = document.getElementById('jogadaM')
let pontuacaovc = document.getElementById('pontuacaovc')
let pontuacaomaq = document.getElementById('pontuacaomaq')
let contavc = 0
let contamaq = 0




function gerarNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }
function JogadaM(){
    let indice =gerarNumeroAleatorio(0,2)
    let maquina = lista[indice]
    return maquina
}

function selecionado() {
    if(pedra.checked){
        resposta.innerHTML = ''
        resposta.innerHTML +='Você escolheu <strong>PEDRA</strong>'
        
        if(JogadaM() == 'tesoura'){
            contavc+=1
            resposta.innerHTML +=' E a Maquina escolheu <strong>TESOURA</strong>,<br> Você ganhou Parabéns !'
            jogadaMaq.src ='./tesoura.png' 
            pontuacaovc.innerHTML =contavc
            


        }else if(JogadaM() == 'papel'){
            contamaq+=1
            resposta.innerHTML +=' E a Maquina escolheu <strong>PAPEL</strong>,<br> Infelizmente você perdeu !'
            jogadaMaq.src ='./papel.png' 
            pontuacaomaq.innerHTML = contamaq
  
        }else{
            resposta.innerHTML += ' <strong>EMPATE !</strong>'
            jogadaMaq.src ='./pedra.png' 
        }
    }else if(papel.checked){
        resposta.innerHTML = ''
        resposta.innerHTML += 'Você escolheu <strong>PAPEL</strong>'
        if(JogadaM() == 'tesoura'){
            contamaq+=1
            resposta.innerHTML +=' E a maquina escolheu <strong>TESOURA</strong> ,<br> Você infelizmente perdeu !'
            jogadaMaq.src ='./tesoura.png'
            pontuacaomaq.innerHTML =contamaq

        }else if(JogadaM() == 'papel'){
            resposta.innerHTML +=' E a Maquina escolheu <strong>PAPEL</strong>,<br><strong>EMPATE</strong>'
            jogadaMaq.src ='./papel.png'
        }else{
            contavc+=1
            resposta.innerHTML +=' E a Maquina escolheu <strong>PEDRA</strong>,<br>Parabéns você ganhou !'
            jogadaMaq.src = './pedra.png'
            pontuacaovc.innerHTML =contavc
        }
    }else if(tesoura.checked){
        resposta.innerHTML = ''
        resposta.innerHTML += 'Você escolheu <strong>TESOURA</strong>'
        if(JogadaM() == 'tesoura'){
            resposta.innerHTML +=' E a maquina escolheu  <strong>TESOURA</strong> ,<br> <strong>EMPATE</strong> !'
            jogadaMaq.src ='./tesoura.png'
        }else if(JogadaM() == 'papel'){
            resposta.innerHTML +=' E a Maquina escolheu <strong>PAPEL</strong>,<br>Parabéns ! Você ganhou !'
            jogadaMaq.src ='./papel.png'
            pontuacaovc.innerHTML =contavc
        }else{
            contamaq+=1
            resposta.innerHTML +=' E a Maquina escolheu <strong>PEDRA</strong>,<br>Infelizmente você perdeu !'
            jogadaMaq.src = './pedra.png'
            pontuacaomaq.innerHTML = contamaq
        }
        
    }
}

