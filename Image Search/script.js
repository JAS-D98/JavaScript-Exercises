const search = () => {
    const searchbox=document.getElementById("search-item").value.toUpperCase()
    const storeItems=document.getElementById("products")
    const product=document.querySelectorAll(".product-items")
    const pname=storeItems.getElementsByTagName('h2')

    for(let i=0; i<pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
          let textvalue= match.textContent || match.innerHTML

          if(textvalue.toUpperCase().indexOf(searchbox)>-1){
            product[i].style.display="";
          }else{
            product[i].style.display="none";  
          }
        }
    }
}