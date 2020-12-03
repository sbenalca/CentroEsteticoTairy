var bandera = true;
function ocultar(){   
    if(bandera){        
        closeNav();
        bandera = false;
    }else{
        openNav();
        bandera=true;
    } 
    

}
function openNav() {
    document.getElementById("sidebar-container").style.width = "220px";
    document.getElementById("estatico").style.width="90%"
    datos = $(".menu > a");
    tamanio = datos.length;
    for(var i =0; i<tamanio;i++){
        console.log(datos.eq(i))
        datos.eq(i).removeClass("tamanio");
    }
}

function closeNav() {
    document.getElementById("sidebar-container").style.width = "50px";
    document.getElementById("estatico").style.width="100%"
    datos = $(".menu > a");
    tamanio = datos.length;
    for(var i =0; i<tamanio;i++){
        console.log(datos.eq(i))
        datos.eq(i).addClass("tamanio");
    }
    
}
