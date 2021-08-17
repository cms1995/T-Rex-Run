/* 9°creamos estas variables p acceder al dino en el bloque */
var dinosaur = document.getElementById("dinosaur");
var block = document.getElementById("block")

/* 10°: creamos la funcion jump q accede al dino y añadimos la clase para q salte y añadimos el onclick en el html */
function  jump(){
    if(dinosaur.classList != "jumpAnimation"){
        dinosaur.classList.add("jumpAnimation")
    }
    setTimeout(function(){
        dinosaur.classList.remove("jumpAnimation")
    }, 500)//12°: despues de 500ms, la animacion se realizó y procedemos a removerla
}

//13°: vamos a crear una funcion q corra cada 10ms y q verifique si perdiste o no
var checkDead = setInterval(function(){
    //14°: lo primero a hacer dentro de esta funcion es identificar the top position del dino y the left position del block. Lo primero lo hacemos así
    var dinosaurTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))

    //15°:
    if(blockLeft<20 && blockLeft>0 && dinosaurTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Game Over.");
    }
}, 10)
