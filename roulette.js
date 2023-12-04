function agregarParticipante(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
    
    var nombre = document.getElementById('nombre').value;
  
    if (nombre !== '') {
      var lista = document.getElementById('listaParticipantes');
      var nuevoParticipante = document.createElement('li');
      nuevoParticipante.appendChild(document.createTextNode(nombre));
      
      // Botón de eliminar
      var botonEliminar = document.createElement('button');
      botonEliminar.appendChild(document.createTextNode('X'));
      botonEliminar.onclick = function() {
        lista.removeChild(nuevoParticipante);
      };
      nuevoParticipante.appendChild(botonEliminar);
      (botonEliminar).style.color= '#900C3F';
      (botonEliminar).style.background= '#FFD146';
      (botonEliminar).style.border= 'none';
      (botonEliminar).style.margin= '10px';
      (botonEliminar).style.padding= '5px';
      (botonEliminar).style.borderRadius= '4px';



      lista.appendChild(nuevoParticipante);
      document.getElementById('nombre').value = '';
    }
  }

