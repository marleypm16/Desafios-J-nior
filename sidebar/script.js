
let btn=document.querySelector("#btn");
let sidebar=document.querySelector(".sidebar");
let searchBtn=document.querySelector(".fa-magnifying-glass")

btn.onclick= function(){
    sidebar.classList.toggle("active")
}

searchBtn.onclick= function(){

    sidebar.classList.toggle("active") //permite que a classe volte ao que era antes.
    //entao ao clicar a class sidebar vira sidebar active e ao clicar novamente volta a ser sidebar
}