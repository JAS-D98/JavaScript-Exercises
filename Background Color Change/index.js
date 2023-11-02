const Button=document.querySelector('button');
const Body=document.querySelector('body')
const color=['Blue', 'Violent', 'Pink', 'Yellow', 'Orange'];

Button.addEventListener("click", function(){
    const colorIndex=parseInt(Math.random()*color.length)
    Body.style.background=color[colorIndex]
})