// function to get rid of preloader after it loads
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})