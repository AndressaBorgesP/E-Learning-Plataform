const searchInput = document.getElementById('search-input');
const courseSection = document.querySelector('.course-1');
const courseBoxes = document.querySelectorAll('.box');

document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
  event.preventDefault(); // Evita que a página seja recarregada quando o botão de pesquisa for clicado
  const searchTerm = searchInput.value.toLowerCase(); // Obtém o valor do input de pesquisa e converte em minúsculas
  courseBoxes.forEach(function(box) {
    const courseName = box.querySelector('h3').textContent.toLowerCase(); // Obtém o nome do curso e converte em minúsculas
    if (courseName.includes(searchTerm)) {
      box.style.display = 'block'; // Exibe a caixa do curso se o termo de pesquisa for encontrado no nome do curso
    } else {
      box.style.display = 'none'; // Oculta a caixa do curso se o termo de pesquisa não for encontrado no nome do curso
    }
  });
});
