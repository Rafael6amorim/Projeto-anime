const cartaoNaruto = document.querySelectorAll('.cartao-naruto');
const cartaoDragon = document.querySelectorAll('.cartao-dragon')
const setaAvancarDragon = document.querySelectorAll('#seta-avancar-dragon');
const setaAvancarNaruto = document.querySelectorAll('#seta-avancar-naruto');
const setaVoltarNaruto = document.querySelectorAll('#seta-voltar-naruto');
const setaVoltarDragon = document.querySelectorAll('#seta-voltar-dragon');


console.log(setaAvancarDragon);

imagemAtualNaruto = 0;
imagemAtualDragon = 0;


setaAvancarNaruto[0].addEventListener('click',
function(){
    if(imagemAtualNaruto === cartaoNaruto.length -1){
        return;
    }
    esconderImagemNaruto()
    imagemAtualNaruto++
    cartaoNaruto[imagemAtualNaruto].classList.add('mostrar-naruto')

})
setaVoltarNaruto[0].addEventListener('click',
function(){
    if(imagemAtualNaruto === 0){
        return;
    }
    esconderImagemNaruto()
    imagemAtualNaruto--
    cartaoNaruto[imagemAtualNaruto].classList.add('mostrar-naruto')

})

setaAvancarDragon[0].addEventListener('click',
function(){
    if(imagemAtualDragon === cartaoDragon.length -1){
        return;
    }
    
    esconderImagemDragon()
    imagemAtualDragon++
    cartaoDragon[imagemAtualDragon].classList.add('mostrar-dragon')

})
setaVoltarDragon[0].addEventListener('click',
function(){
    if(imagemAtualDragon === 0){
        return;
    }
    
    esconderImagemDragon()
    imagemAtualDragon--
    cartaoDragon[imagemAtualDragon].classList.add('mostrar-dragon')

})

function esconderImagemNaruto(){
    const imagemAberta = document.querySelector('.mostrar-naruto')
    imagemAberta.classList.remove('mostrar-naruto')
}
function esconderImagemDragon(){
    const imagemAberta = document.querySelector('.mostrar-dragon')
    imagemAberta.classList.remove('mostrar-dragon')
}