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

        if(cont>7){
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
    byCategoria();
    byNombre();
})

byCategoria = () => {
    let categorias = document.getElementsByClassName("categoria")
    for ( i=0;  i<categorias.length; i++){
        categorias[i].addEventListener('click', function (e){
            filterbyCat(e)
        })
    }
}

filterbyCat = (clickeado) =>{

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

byNombre = () => {
    input = document.getElementById("inputServicio")
    input.addEventListener("keyup", function (){
        filterByNom(input.value)
    })
}

filterByNom = (valor) => {
    console.log(valor)
    dato = document.getElementsByClassName("servicio");

    for (i = 0; i < dato.length; i++) {
        compare = dato[i].getElementsByTagName("h2")[0].innerText
        console.log(compare)
        if (compare.indexOf(valor)<0){
            dato[i].style.display="none";
        }else {
            dato[i].style.display="";
        }
    }  
}