const email = document.getElementById('email')
const user = document.getElementById('username')
const senha= document.getElementById('senha')
const confirma= document.getElementById('confirm')
const button= document.getElementById('verificar')

button.onclick = (e) =>{
    e.preventDefault()

    checkInput()


}

function checkInput(){
    const emailvalue= email.value
    const uservalue = user.value
    const senhavalue = senha.value
    const confirmvalue=confirma.value

    if(emailvalue == ''){
    setErro(email, 'Email cannot be blank')
}
else{
    setSucesso(email)
}
if(uservalue == ''){
    setErro(user, 'Username cannot be blank')
}
else{
    setSucesso(user)
}
if(senhavalue == ''){
    setErro(senha, 'Password cannot be blank')
}
else if(senhavalue.length < 7){
    setErro(senha,'Password must be at least 7 characters')
}
else{
    setSucesso(senha)
}
if(confirmvalue == ''){
    setErro(confirma, 'Password Confirmation cannot be blank')
}
else if(confirmvalue != senhavalue){
    setErro(confirma,'Passwords do not match')
}
else{
    setSucesso(confirma)
    button.onclick=function(){

        location.href="http://127.0.0.1:5500/sidebar/index.html"
    }
    
}


   
   

    
   
}

function setErro(input,mensagem){
    const conteiner = input.parentElement;
    const small= conteiner.querySelector('small')
    small.innerText=mensagem
    conteiner.className='conteiner erro'
}

function setSucesso(input){
    const conteiner = input.parentElement;
    conteiner.className='conteiner sucesso'
    
}   