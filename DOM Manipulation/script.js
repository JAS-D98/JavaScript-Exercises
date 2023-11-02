(function(){
const buttons=document.querySelectorAll('.btn')
const screen=document.querySelector('.input-el')

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let newEl=e.target.dataset.num
        screen.value=newEl
    })
})
})();