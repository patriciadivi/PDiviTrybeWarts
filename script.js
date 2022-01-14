const buttom = document.querySelector('.btnLogin');
const email = document.querySelector('.btnEmail');
const senha = document.querySelector('.btnSenha');
const agreement = document.querySelector('#agreement');

function testebuttom(event) {
  const compEmail = 'tryber@teste.com';
  const compSenha = '123456';
  event.preventDefault();
  if (email.value === compEmail && senha.value === compSenha) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttom.addEventListener('click', testebuttom);

function showButton() {
  const buttomSubmit = document.querySelector('#submit-btn');
  const checkBox = document.querySelector('#agreement').checked;
  if (checkBox === true) {
    buttomSubmit.disabled = false;
    buttomSubmit.style.display = 'inline-block';
  } if (checkBox !== true) {
    buttomSubmit.disabled = true;
    buttomSubmit.style.display = 'none';
  }
}

agreement.addEventListener('click', showButton);
