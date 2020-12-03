let cont=0;
let cargarDatosJson = () => {

    fetch('../../recursos/comments.json')
    .then( (resultado) => {
      return resultado.text() ;
    })
  
    .then( (str) => {
      
      let json = JSON.parse(str, "text/json");
  
      carrusel = document.getElementsByClassName("carousel-inner")[0];

      for (j of json){
        cont++;
        let item = document.createElement("div");
        if(cont==1){
          item.setAttribute("class","carousel-item active");
        }else{
          item.setAttribute("class","carousel-item");
        }
        
        let cliente= document.createElement("div");
        cliente.setAttribute("class","cliente");

        let img= document.createElement("img");
        img.setAttribute("class","comentarios-image");
        img.setAttribute("src","../recursos/usuario.png");
        img.setAttribute("alt","cliente");


        let comentario=document.createElement("div");
        comentario.setAttribute("class","comentarios-text");

        let p=document.createElement("p");
        p.innerText=j.comentario
        let nombre=document.createElement("p");
        nombre.innerText=j.cliente
        comentario.appendChild(p);
        comentario.appendChild(nombre);
        cliente.appendChild(img);
        cliente.appendChild(comentario);
        item.appendChild(cliente);
        carrusel.appendChild(item);
      }
      
    })
    .catch( (error) => {
  
      console.log("Error ",error)
  
    })
  
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    cargarDatosJson();
  })
  
  