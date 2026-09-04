/* Menu mobile — abre e fecha o menu superior pelo botão sanduíche. */
(function () {
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('header-menu');
  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!menu.classList.contains('is-open'));
  });

  // Fecha ao clicar em qualquer link do menu.
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  // Fecha ao clicar fora do cabeçalho ou ao apertar Esc.
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.site-header')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  // Voltando ao desktop, o menu deixa de ficar em estado "aberto".
  window.addEventListener('resize', function () {
    if (window.innerWidth > 800) setOpen(false);
  });
})();
