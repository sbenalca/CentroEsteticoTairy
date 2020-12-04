let cargarDatosJson = () => {

    fetch('../../recursos/ec.json')
    .then( (resultado) => {
      return resultado.text() ;
    })
  
    .then( (str) => {
      
      let json = JSON.parse(str, "text/json");
  
      select = document.getElementById("contact-ciudad");

      

      for (ciudades of json){
        
        let c = ciudades.city

        let item = document.createElement("option");
        item.textContent = c;
        
        select.appendChild(item);
      }
      
    })
    .catch( (error) => {
  
      console.log("Error ",error)
  
    })
  
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    cargarDatosJson();
  })