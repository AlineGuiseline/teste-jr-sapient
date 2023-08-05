// Vanilla JS

/* Abrir e fechar o menu com o clique no botão Menu */
const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('-active');
});

/* Play do vídeo ao clicar na imagem de capa */

function playVideo() {
  const videoCover = document.querySelector('.video-cover');
  const videoPlayer = document.querySelector('#video-player');

  videoCover.addEventListener('click', () => {
    videoCover.classList.toggle('-inactive');
    videoPlayer.play();
  });
}

document.addEventListener("DOMContentLoaded", playVideo);

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

/* Carregamento de conteúdo ajax pela api da Wikipedia */

function showInfos() {
  const wikiExtract = document.querySelector('.extract');

  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Alber%20Einstein';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const extract = data.query.pages[736].extract;
      wikiExtract.innerHTML = extract;
    })
    .catch(error => {
      console.error('Erro ao obter informações da Wikipedia:', error);
    });
}

document.addEventListener("DOMContentLoaded", showInfos());

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