// Script futuro: adicionar interatividade com JS aqui
console.log("Projeto carregado!");

// Interatividade simples: abre/fecha a resposta
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = document.getElementById(button.getAttribute('aria-controls'));
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', String(!isExpanded));
    answer.hidden = isExpanded;
  });
});
