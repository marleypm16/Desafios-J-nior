
let btn=document.querySelector("#btn");
let sidebar=document.querySelector(".sidebar");
let searchBtn=document.querySelector(".fa-magnifying-glass")
let exit=document.getElementById('log_out')

btn.onclick= function(){
    sidebar.classList.toggle("active")
}

searchBtn.onclick= function(){

    sidebar.classList.toggle("active") //permite que a classe volte ao que era antes.
    //entao ao clicar a class sidebar vira sidebar active e ao clicar novamente volta a ser sidebar
}

exit.onclick=function(){
    
    location.href="http://127.0.0.1:5500/sidebar/login.html"
}

