'use strict'

let botonOpen = document.querySelector("#openMenu");
let botonClose = document.querySelector("#closeMenu");
let lateral = document.querySelector(".lateral");


function showLateral(){
    botonOpen.style.visibility = "hidden";
    botonClose.style.visibility = "visible";
    lateral.style.position = "fixed";
    lateral.style.display = "flex";

    return true;
}

function closeLateral(){
    botonOpen.style.visibility = "visible";
    botonClose.style.visibility = "hidden";
    lateral.style.position = "relative"
    lateral.style.display = "none";

    return true;
}





botonOpen.addEventListener('click', () =>{
    showLateral();
});

botonClose.addEventListener('click', () =>{
    closeLateral();
});

 

