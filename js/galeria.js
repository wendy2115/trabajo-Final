const galeria = [
  '../images/servicios/Babor-spress.jpeg',
  '../images/servicios/velos-de-colageno.jpg',
  '../images/servicios/crash-ampollas.jpg',
  '../images/servicios/cleopatra-h-l.jpg',
  '../images/servicios/chocolaterapia.jpg',
];

let active = 0;

setInterval(() => {
  if (active === galeria.length - 1) {
    active = 0;
  } else {
    active++;
  }

  galeriaRotativa();
}, 3000);

const galeriaRotativa = () => {
  let imagesHtml = galeria
    .map((image, index) => {
      return active === index
        ? `<img src="${image}" alt="Imagen ${index}" />`
        : '';
    })
    .join('');

  document.getElementById('galeria-container').innerHTML = imagesHtml;
};
