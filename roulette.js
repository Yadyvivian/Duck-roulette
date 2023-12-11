function spinWheel() { 
  
    let ruleta = document.querySelector("#ruleta");

    if (ruleta.classList.contains("slow-spin")) {
      ruleta.classList.remove("slow-spin");
      ruleta.classList.add("fast-spin");
    } else {
      ruleta.classList.remove("fast-spin");
      ruleta.classList.add("slow-spin");
    }
    
    setTimeout(() => {
        ruleta.classList.remove("fast-spin");
    }, 7000); 
    
    setTimeout(()=> {
      window.location.href = 'cards.html';
    }, 3500)
}
