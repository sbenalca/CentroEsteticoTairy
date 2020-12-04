Paginador = function(divPaginador, tabla, tamPagina)
{
    this.miDiv = divPaginador; //un DIV donde irán controles de paginación
    this.tabla = tabla;           //la tabla a paginar
    this.tamPagina = tamPagina; //el tamaño de la página (filas por página)
    this.pagActual = 1;         //asumiendo que se parte en página 1
    this.paginas = Math.floor((this.tabla.rows.length - 1) / this.tamPagina); //¿?
 
    this.SetPagina = function(num)
    {
        if (num < 0 || num > this.paginas)
            return;
 
        this.pagActual = num;
        var min = 1 + (this.pagActual - 1) * this.tamPagina;
        var max = min + this.tamPagina - 1;
 
        for(var i = 1; i < this.tabla.rows.length; i++)
        {
            if (i < min || i > max)
                this.tabla.rows[i].style.display = 'none';
            else
                this.tabla.rows[i].style.display = '';
        }
    }
 
    this.Mostrar = function()
    {
        //Crear la tabla
        var tblPaginador = document.createElement('tr');

 
        //Agregar una fila a la tabla
        //var fil = tblPaginador.insertRow(tblPaginador.rows.length);
 
        //Ahora, agregar las celdas que serán los controles
        var ant = document.createElement("th");
        ant.setAttribute("id","pag_btn")
        ant.innerHTML = '<';
        //ant.className = 'pag_btn'; //con eso le asigno un estilo
        var self = this;
        ant.onclick = function()
        {
            if (self.pagActual == 1)
                return;
            self.SetPagina(self.pagActual - 1);
        }

        
 
        var sig =  document.createElement("th");;
        sig.innerHTML = '>';
        sig.setAttribute("id","pag_btn");
        //sig.className = 'pag_btn';
        sig.onclick = function()
        {
            if (self.pagActual == self.paginas)
                return;
            self.SetPagina(self.pagActual + 1);
        }
        
        tblPaginador.appendChild(ant)
        tblPaginador.appendChild(sig)
        document.getElementById('mitabla').appendChild(tblPaginador)
        //Como ya tengo mi tabla, puedo agregarla al DIV de los controles
        this.miDiv.appendChild(tblPaginador);
 
        //¿y esto por qué?
        if (this.tabla.rows.length - 1 > this.paginas * this.tamPagina)
            this.paginas = this.paginas + 1;
 
        this.SetPagina(this.pagActual);
    }
}

let cargarDatos = () => {

  fetch('../../recursos/integrantes.json')
  .then( (resultado) => {
     //Transforma en texto

    return resultado.json()
  }) 
  .then( (data) => {
    console.log(data);

    //creo la tabla
    let table = document.createElement("table");
    table.setAttribute('id',"mitabla");
    //creo la cabecera de la tabal
    let trcabecera = document.createElement("tr");
    trcabecera.setAttribute("id","usuario")

    let thimg = document.createElement("th")
    trcabecera.appendChild(thimg);

    let thtratamiento = document.createElement("th");
    thtratamiento.textContent = "USUARIO";
    trcabecera.appendChild(thtratamiento);

    let thfecha = document.createElement("th");
    thfecha.textContent = "CREATED AT";
    trcabecera.appendChild(thfecha);

    let thstatus = document.createElement("th");
    thstatus.textContent = "STATUS";
    trcabecera.appendChild(thstatus);

    let thsalario = document.createElement("th");
    thsalario.textContent = "SALARIO";
    trcabecera.appendChild(thsalario);

    let thagregado = document.createElement("th");
    thagregado.textContent = "AGREGADO POR:";
    trcabecera.appendChild(thagregado);

    let thcompletion = document.createElement("th");
    thcompletion.textContent = "COMPLETION";
    trcabecera.appendChild(thcompletion);

    table.appendChild(trcabecera)

    //accedo a cada elemento y lo pongo en la tabla
    for(let persona of data) {
     //Transforma en texto
      
      let tr = document.createElement("tr")

      let tdimg = document.createElement("td")
      let img = document.createElement("img")
      img.setAttribute("src",persona.img);
      img.setAttribute("id","imgIntegrante")

      tdimg.appendChild(img);
      tr.appendChild(tdimg);
      
      let tdnombre = document.createElement("td")
      tdnombre.textContent =persona.integrante
      tdnombre.setAttribute("id","nombreIntegrante")
      tr.appendChild(tdnombre)

      let tdfecha= document.createElement("td")
      tdfecha.textContent ="20/03/2020 "
      tr.appendChild(tdfecha)

      let tdestado = document.createElement("td")
      let circulo=document.createElement("input")
      circulo.setAttribute("type","radio");
      circulo.setAttribute("id","circulo");
      circulo.setAttribute("disabled","");
      tdestado.textContent = "Activo "
      tdestado.appendChild(circulo)
      tr.appendChild(tdestado)

      let tdsalario= document.createElement("td")
      tdsalario.textContent ="$550"
      tr.appendChild(tdsalario)

      let tdimgAgr = document.createElement("td")
      tdimgAgr.setAttribute("id","imgAgr")
      let imgAgr = document.createElement("img")
      imgAgr.setAttribute("src",persona.img);
      imgAgr.setAttribute("id","imgAgregado")
      tdimgAgr.appendChild(imgAgr);
      tr.appendChild(tdimgAgr);

      let tdavance = document.createElement("td")
      tdavance.setAttribute("id","porcentaje")
      let progreso=document.createElement("progress")
      progreso.setAttribute("id","progTratam")
      progreso.setAttribute("value","70")
      progreso.setAttribute("max","100")
      tdavance.textContent = "40% "
      tdavance.appendChild(progreso)
      tr.appendChild(tdavance)

      table.appendChild(tr)
      
    }
    //Agregamos la tabla al nodo en el html
    document.getElementById('listaUsuarios').appendChild(table);

    var p = new Paginador(document.getElementById('listaUsuarios'),
    document.getElementById('mitabla'), 3);
    p.Mostrar();

  })
  //.then(()=>{
    //cargarJSON();
  //})
  .catch( (error) => {

    console.log("Error ",error)

  })

}

document.addEventListener('DOMContentLoaded', function() {
  cargarDatos();
})