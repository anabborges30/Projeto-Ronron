document.addEventListener('DOMContentLoaded', function () {

  // ========= filtro de gatos por sexo e idade =========
  const botoesFiltro = document.querySelectorAll('.filtro-btn');
  const gatos = document.querySelectorAll('.gato-card');

  botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
      const filtro = botao.dataset.filtro;

      gatos.forEach(gato => {
        const sexo = gato.dataset.sexo;
        const idade = parseFloat(gato.dataset.idade);
        let mostrar = false;

        switch (filtro) {
          case "todos":
            mostrar = true;
            break;
          case "femea":
            mostrar = sexo === 'femea';
            break;
          case "macho":
            mostrar = sexo === 'macho';
            break;
          case "ate6":
            mostrar = idade <= 0.5;
            break;
          case "6a5":
            mostrar = idade > 0.5 && idade <= 5;
            break;
          case "5a10":
            mostrar = idade > 5 && idade <= 10;
            break;
          case "10mais":
            mostrar = idade > 10;
            break;
        }

        // IMPORTANTE para o Bootstrap
        gato.style.display = mostrar ? "" : "none";
      });
    });
  });

  // ========= botão de mostrar mais/menos gatos =========
const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))

const btn = document.querySelector('[data-bs-target="#maisGatos"]');
const collapse = document.getElementById('maisGatos');

collapse.addEventListener('shown.bs.collapse', () => {
  btn.textContent = 'Ver menos';
});

collapse.addEventListener('hidden.bs.collapse', () => {
  btn.textContent = 'Ver mais';
});


  // ========= validação do formulário de contato =========
  const form = document.getElementById('form-contato');

  // Inputs do formulário
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');
    const assuntoInput = document.getElementById('assunto');
    const mensagemInput = document.getElementById('mensagem');

// Elemento para exibir mensagens de feedback
    const msgFeedback = document.getElementById('feedback-form');

// Evento de submissão do formulário
    form.addEventListener('submit', (e) => {
      e.preventDefault();   
        const nomeVal = nomeInput.value.trim();
        const emailVal = emailInput.value.trim();
        const telefoneVal = telefoneInput.value.trim();
        const mensagemVal = mensagemInput.value.trim();

// Resetar mensagens anteriores       
    resetarFeedback();

// Validação dos campos
    let isValid = true;

    if(nomeVal.length < 3){
        mostrarErro('Por favor, insira seu nome completo.');
        isValid = false;
    }

    if (!emailVal.includes('@') || !emailVal.includes('.') || emailVal.includes(' ')) {
        mostrarErro('Por favor, insira um e-mail válido contendo "@" e sem espaços.');
        isValid = false;
    }

    if (telefoneVal.length < 8) {
        mostrarErro('Por favor, insira um número de telefone válido com pelo menos 8 dígitos.');
        isValid = false;
    }

    if(assuntoInput.value === '') {
        mostrarErro('Por favor, selecione um assunto para a sua mensagem.');
        isValid = false;
    }

    if (mensagemVal.length < 30) {
        mostrarErro('A mensagem deve ter pelo menos 30 caracteres.');
        isValid = false;
    }

    if (isValid) {
        mostrarSucesso(`Obrigado, ${nomeVal}! Sua mensagem foi enviada com sucesso. Responderemos em breve.`);
        form.reset();
        nomeInput.focus();
    }
    });

// Funções para mostrar mensagens de feedback
    function mostrarErro(mensagem) {
        msgFeedback.textContent = mensagem;
        msgFeedback.classList.add('erro');
    }

    function mostrarSucesso(mensagem) {
        msgFeedback.textContent = mensagem;
        msgFeedback.classList.add('sucesso');
    }

    function resetarFeedback() {
        msgFeedback.textContent = '';
        msgFeedback.classList.remove('sucesso', 'erro');
    }
});
  