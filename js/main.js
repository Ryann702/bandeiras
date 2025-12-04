import flags from './model/flags.js';
const areaPrincipal = document.querySelector('#flags-container');

areaPrincipal.innerHTML = flags.map(bandeira => `
  <div class="flag col-2 my-2 text-center">
    <img src="${bandeira.image}" alt="${bandeira.name}">
    <p>${bandeira.name}</p>
  </div>
`).join('');