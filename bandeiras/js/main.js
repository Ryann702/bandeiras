import flags from './model/flags.js';

const areaPrincipal = document.querySelector('main');

for (const bandeira of flags) {
  const layoutDaBandeira = criarLayoutDaBandeira(bandeira);
  areaPrincipal.insertAdjacentHTML('beforeend', layoutDaBandeira);
}

function criarLayoutDaBandeira(bandeira) {
  const layout = `
    <div class="flag col-2 my-2 text-center">
      <img src="${bandeira.image}" alt="${bandeira.name}">
      <p>${bandeira.name}</p>
    </div>
  `;
  return layout;
}