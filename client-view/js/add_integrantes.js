let cargarDatosJson = () => {

    fetch('../../recursos/integrantes.json')
    .then( (resultado) => {
    return resultado.text() ;
    })

    .then( (str) => {
    
    let json = JSON.parse(str, "text/json");

    integrantes = document.getElementsByClassName("equipo-grid")[0];

    for (j of json){

        let integrante = document.createElement("div");
        integrante.setAttribute("class","integrante col-lg-5")
        let img = document.createElement("img");
        img.setAttribute("src", j.img)
        let nombre = document.createElement("h2");
        nombre.innerText=j.integrante
        let cargo = document.createElement("p");
        cargo.innerText=j.cargo
        let info = document.createElement("p");
        info.innerText=j.informacion
        integrante.appendChild(img)
        integrante.appendChild(nombre)
        integrante.appendChild(cargo)
        integrante.appendChild(info)

        integrantes.appendChild(integrante)

    }
    
    })
    .catch( (error) => {

    console.log("Error ",error)

    })

}

document.addEventListener('DOMContentLoaded', function() {
    cargarDatosJson();
})

