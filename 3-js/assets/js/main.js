// Vanilla JS

/* Abrir e fechar o menu com o clique no botão Menu */
const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('-active');
});

/* Play do vídeo ao clicar na imagem de capa 
  >>> PS: Observei que esta interação funciona somente no navegador Mozilla Firefox, mas não consigo entender o motivo
*/

const videoCover = document.querySelector('.video-cover');
const videoPlayer = document.querySelector('#video-player');

videoCover.addEventListener('click', () => {
  videoCover.classList.toggle('-inactive');
  videoPlayer.play();
})

/* Sistema de sanfona para a lista */
const accordionItems = document.querySelectorAll('.accordion .item');

accordionItems.forEach(item => {
  const title = item.querySelector('.title');
  const description = item.querySelector('.description');

  title.addEventListener('click', () => {
    item.classList.toggle('-active');
    if(item.classList.contains('-active')) {
      description.style.maxHeight = description.scrollHeight + 'px';
      title.querySelector('::after').textContent = '-';
    } else {
      description.style.maxHeight = '0';
      title.querySelector('::after').textContent = '+';
    }
  })
})

/* Carregamento de conteúdo ajax pela api da CatFact */
function showCatFact() {
  const wikiExtract = document.querySelector('.extract');

  const url = 'https://catfact.ninja/fact';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const catFact = data.fact;
      wikiExtract.innerHTML = catFact;
    })
    .catch(error => {
      console.error('Erro ao obter informações da CatFact:', error);
    });
}

document.addEventListener("DOMContentLoaded", showCatFact());


/* Abrir modal com a foto e fazer função no botão de fechar */
const openWikiModal = document.querySelector('#button-modal');
const modalWiki = document.querySelector('.modal-wiki');
const closeWikiModal = document.querySelector('#close-modal');

openWikiModal.addEventListener('click', () => {
  modalWiki.classList.toggle('modal-wiki-active');
});

closeWikiModal.addEventListener('click', () => {
  modalWiki.classList.remove('modal-wiki-active');
});