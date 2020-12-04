let cont=0;
let cargarDatosJson = () => {

    fetch('../../recursos/news.json')
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
        
        let promo= document.createElement("div");
        promo.setAttribute("class","promo");

        let img= document.createElement("img");
        let src = j.img;
        let nombre = j.nombre;
        img.setAttribute("class","comentarios-image");
        img.setAttribute("src",src);
        img.setAttribute("alt",nombre);
        img.setAttribute("height","100%");

        item.appendChild(img);
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
  
  