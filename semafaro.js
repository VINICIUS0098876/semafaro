'use strict'

function vermelho(){
    const vermelho = document.getElementById('vermelho')
    vermelho.style.backgroundColor = 'red'
    setTimeout(function(){
        vermelho.style.backgroundColor = 'rgb(90, 29, 29)'
        verde()
    }, 10000)
}

function amarelo(){
    const amarelo = document.getElementById('amarelo')
    amarelo.style.backgroundColor = 'yellow'
    setTimeout(function(){
        amarelo.style.backgroundColor = 'rgb(90, 90, 27)'
        vermelho()
    }, 5000)
}

function verde(){
    const verde = document.getElementById('verde')
    verde.style.backgroundColor = 'rgb(10, 245, 10)'

    setTimeout(function(){
        verde.style.backgroundColor = 'rgb(35, 78, 35)'
        amarelo()
    }, 5000)
}

verde()



