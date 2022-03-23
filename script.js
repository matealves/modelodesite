let menuSusp = document.getElementById("menuSusp");
let botaoMobile = document.getElementById("botaoMobile");

menuSusp.style.display = "none";

botaoMobile.addEventListener("click", (event) =>{
    if(menuSusp.style.display == "none"){
        menuSusp.style.display = "flex";
    } else {
        menuSusp.style.display = "none";
    }
})