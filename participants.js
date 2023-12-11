var participantes= [] //array para los nombres

function agregarParticipante(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
    
    var nombre = document.getElementById('nombre').value;
  
    if (nombre !== '') {
      participantes.push(nombre)// mete los nombres en el array
      var lista = document.getElementById('listaParticipantes');
      sessionStorage.setItem ("participantes", JSON.stringify(participantes)); //guarda el array en el navegador
      
      var nuevoParticipante = document.createElement('li');
      nuevoParticipante.appendChild(document.createTextNode(nombre));
      
      // Botón de eliminar
      var botonEliminar = document.createElement('button');
      botonEliminar.appendChild(document.createTextNode('X'));
      botonEliminar.onclick = function() {
        lista.removeChild(nuevoParticipante);
        participantes.splice (participantes.indexOf(nombre), 1); //elimina del array
        sessionStorage.setItem ("participantes", JSON.stringify(participantes)); //guarda el array en el navegador
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
  function redirectToOtraPagina() {
    setTimeout(()=> {
      window.location.href = 'roulette.html';
    }, 1000)
    
  }
  function audiobtn(){
    let audioBoton = document.querySelector("#audio-btn");
    let audioPagina = document.querySelector("#audio");
    audioBoton.play();
  }
