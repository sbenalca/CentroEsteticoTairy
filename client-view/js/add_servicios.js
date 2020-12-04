cont=0;
let cargarDatosJson = () => {

fetch('../../recursos/tratamientos.json')
.then( (resultado) => {
return resultado.text() ;
})

.then( (str) => {

    let json = JSON.parse(str, "text/json");

    primeros = document.getElementById("primeros");
    ocultos = document.getElementById("ocultos");

    for (j of json){

        let servicio = document.createElement("div");
        servicio.setAttribute("class","servicio col-lg-2")
        let img = document.createElement("img");
        img.setAttribute("src", "../../recursos/tratamiento.png")
        let nombre = document.createElement("h2");
        nombre.innerText=j.nombre
        let descripcion = document.createElement("p");
        descripcion.innerText=j.descripcion
        let categoria = document.createElement("p");
        categoria.setAttribute("class","categoria")
        categoria.innerText=j.categoria.toUpperCase()

        servicio.appendChild(img)
        servicio.appendChild(nombre)
        servicio.appendChild(descripcion)
        servicio.appendChild(categoria)

        if(cont>15){
            ocultos.appendChild(servicio)
        }else{
            primeros.appendChild(servicio)
        }
        cont++

    }

})
.catch( (error) => {

    console.log("Error ",error)

})

}

document.addEventListener('DOMContentLoaded', function() {
    cargarDatosJson();
    addFilter();
})

addFilter = () => {
    let categorias = document.getElementsByClassName("categoria")
    for ( i=0;  i<categorias.length; i++){
        categorias[i].addEventListener('click', function (e){
            filter(e)
        })
    }
}

filter = (clickeado) =>{

    id = clickeado.path[1].getAttribute("id").toUpperCase()

    datos = document.getElementsByClassName("servicio");

    for (i = 0; i < datos.length; i++) {
        compare = datos[i].getElementsByClassName("categoria")[0].innerText
        if (compare!= id){
            datos[i].style.display="none";
        }else {
            datos[i].style.display="";
        }
    }    
}
