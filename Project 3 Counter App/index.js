const countEl=document.getElementById('count-el');
const Increment=document.getElementById('add');
const Min=document.getElementById('deduct');
let count=0;

Increment.addEventListener("click", function(){
    count+=1;
    countEl.textContent=count;
    countEl.style.color="green";

})
Min.addEventListener("click", function(){
    count-=1;
    countEl.textContent=count;
    if(count<0){
        countEl.style.color="red";
    }
})