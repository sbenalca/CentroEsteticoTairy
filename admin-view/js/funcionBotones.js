let editarConsejo=(button)=>{
  var x = document.getElementById("contenidoConsejo");
  if (x.contentEditable == "true") {
    x.contentEditable = "false";
    button.innerHTML = "Edit Tip";
  } else {
    x.contentEditable = "true";
    button.innerHTML = "Save!";
  }
}
