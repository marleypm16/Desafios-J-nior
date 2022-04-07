const email=document.getElementById('email')
const getaccess=document.getElementById('get')
const signin= document.getElementById('signin')
const signinconteiner=document.querySelector('.signin-conteiner')


getaccess.addEventListener("submit", (e) =>{
    e.preventDefault()

    checkInput()
})

function checkInput(){

    const emailvalue=email.value



    if(emailvalue == ''){

        SetError(email,'Please enter a email adress')
    }
    else{
        SetSucesso(email)
    }


}

function SetError(input,mensagem){

   const button=input.parentElement;
   const small= button.querySelector('small')
   small.innerText=mensagem
   button.className='input erro'
}

function SetSucesso(input){

    const button= input.parentElement;
    button.className='input sucesso'
}

signin.onclick= function(){

    signinconteiner.classList.toggle("active")

}