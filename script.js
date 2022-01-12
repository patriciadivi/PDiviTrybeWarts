const buttom = document.querySelector('.btnLogin');
const email = document.querySelector('.btnEmail');
const senha = document.querySelector('.btnSenha');

function testebuttom(event){
    let compEmail = "tryber@teste.com";
    let compSenha = "123456";
    event.preventDefault();
    if (email.value === compEmail && senha.value === compSenha) {
        alert("Olá, Tryber!");
        return;
    } else {
        alert("Email ou senha inválidos.");
    }
}
buttom.addEventListener("click", testebuttom);