function changeBg(){
    const images=["url(./Images/menu-1.png)","url(./Images/menu-2.png)","url(./Images/menu-3.png)","url(./Images/menu-4.png)"]
    const bg=images[Math.floor(Math.random()*images.length)]
    const container=document.querySelector('.container')

    container.style.backgroundImage=bg;
}
setInterval(changeBg, 1000)