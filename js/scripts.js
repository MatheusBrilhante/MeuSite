const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    //Verifica se o nome esta vazio

    if(nameInput.value === ""){
        alert("Por favor,preencha o seu nome!")
        return;
    }
    //Verifica se o email esta preenchido e valido
    if(emailInput.value ==="" || !isEmailValid(emailInput.value)){
        alert("Por favor,digite seu e-mail!")
        return;
    }
    if(messageTextarea.value ===""){
        alert("Por favor,Digite mensagem ou motivo!")
        return;
    }

    // Se todos os campos estiverem corretamente preenchidos,envie o form

    form.submit();

});

     // Funçao que valida e-mail
function isEmailValid(email){
    
    // cria uma regex para validar email
    const emailRegex = new RegExp(
        //   usuario12         @host.       com.br validar apenas email com letras A-Z 0-9 host {}mostra pode digitar 2 vzs 
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if (emailRegex.test(email)){
        return true;
    }
    
    return false;
}    
