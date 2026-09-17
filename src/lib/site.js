(function () {
  'use strict';

  // ---------------------------------------------------------- menu mobile
  var alternar = document.querySelector('.alternar-menu');
  var nav = document.getElementById('nav-principal');

  if (alternar && nav) {
    var fechar = function () {
      nav.classList.remove('aberto');
      alternar.setAttribute('aria-expanded', 'false');
      alternar.setAttribute('aria-label', 'Abrir menu de navegação');
    };

    alternar.addEventListener('click', function () {
      var aberto = nav.classList.toggle('aberto');
      alternar.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      alternar.setAttribute('aria-label', aberto ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) fechar();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('aberto')) {
        fechar();
        alternar.focus();
      }
    });

    // Ao voltar para o desktop o menu volta a ser a barra horizontal.
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) fechar();
    });
  }

  // ------------------------------------------- formulário -> WhatsApp
  // O formulário não envia nada para servidor nenhum: ele monta a mensagem
  // e abre a conversa no WhatsApp já preenchida, pronta para o lead enviar.
  var form = document.getElementById('form-contato');
  if (!form) return;

  var numero = form.getAttribute('data-whatsapp');

  var soDigitos = function (v) {
    return (v || '').replace(/\D/g, '');
  };

  // (65) 99844-2334 enquanto digita.
  var campoTelefone = form.querySelector('#campo-whatsapp');
  if (campoTelefone) {
    campoTelefone.addEventListener('input', function () {
      var d = soDigitos(campoTelefone.value).slice(0, 11);
      var saida = d;
      if (d.length > 2) {
        saida = '(' + d.slice(0, 2) + ') ' + d.slice(2);
      }
      if (d.length > 7) {
        var corte = d.length > 10 ? 7 : 6;
        saida = '(' + d.slice(0, 2) + ') ' + d.slice(2, corte) + '-' + d.slice(corte);
      }
      campoTelefone.value = saida;
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.reportValidity()) return;

    var nome = (form.elements['nome'].value || '').trim();
    var whats = (form.elements['whatsapp'].value || '').trim();
    var necessidade = form.elements['necessidade'].value || '';

    var linhas = [
      'Olá, SOUTECH. Vim pelo site e gostaria de solicitar um diagnóstico.',
      '',
      'Nome: ' + nome,
      'WhatsApp: ' + whats,
      'Necessidade: ' + necessidade,
    ];

    var url = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(linhas.join('\n'));

    var aviso = document.getElementById('form-aviso');
    if (aviso) {
      aviso.hidden = false;
      aviso.textContent = 'Abrindo o WhatsApp com a sua mensagem pronta para envio…';
    }

    window.open(url, '_blank', 'noopener');
  });
})();
