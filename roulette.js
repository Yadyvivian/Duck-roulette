//function spinWheel(){
  //  let ruleta = document.querySelector("#ruleta");
  //  ruleta.style.cssText = "-webkit-animation: 3s rotate ease-out 1; animation: 3s rotate ease-out 1;-webkit-transform-origin: 50% 50%;transform-origin: 50% 50%;"



function spinWheel() { 
    let ruleta = document.querySelector("#ruleta");

    ruleta.classList.add("spin-animation");
    

    desacelerar
    setTimeout(() => {
        ruleta.classList.remove("spin-animation");
    }, 7000); 
}

const button = document.querySelector("button");
button.addEventListener("click", function() {
  alert("Hello!");
});
let compis=["Alicia", "Alba", "Joaco", "Alberto", "Denisse", "Paolo", "Alfredo", "marcela", "Laudy"];
      
function mostrarCompis(){
  function getRandomInt(max) {
   return Math.floor(Math.random() *  max);
    }
  
  alert(compis[getRandomInt(8)])
}



