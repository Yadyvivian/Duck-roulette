function redirectToOtraPagina() {
  setTimeout(()=> {
    window.location.href = 'participants.html';
  }, 1000)
  }

  function audiobtn(){
    let audioBoton = document.querySelector("#audio-btn");
    let audioPagina = document.querySelector("#audio");
    audioBoton.play();
  }
  