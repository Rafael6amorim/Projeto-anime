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
    esconderImagem()
    imagemAtualNaruto++
    cartaoNaruto[imagemAtualNaruto].classList.add('mostrar')

})

setaAvancarDragon[0].addEventListener('click',
function(){
    if(imagemAtualDragon === cartaoDragon.length -1){
        return;
    }
    
    esconderImagem()
    imagemAtualDragon++
    cartaoDragon[imagemAtualDragon].classList.add('mostrar')
})

function esconderImagem(){
    const imagemAberta = document.querySelector('.mostrar')
    imagemAberta.classList.remove('mostrar')
}