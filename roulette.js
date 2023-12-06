//function spinWheel(){
  //  let ruleta = document.querySelector("#ruleta");
  //  ruleta.style.cssText = "-webkit-animation: 3s rotate ease-out 1; animation: 3s rotate ease-out 1;-webkit-transform-origin: 50% 50%;transform-origin: 50% 50%;"



function spinWheel() { 
    let ruleta = document.querySelector("#ruleta");
    
    ruleta.classList.add("spin-animation");
    
    setTimeout(() => {
        ruleta.classList.remove("spin-animation");
    }, 7000); 
    
    setTimeout(()=> {
      window.location.href = 'cards.html';
    }, 4000)
}
