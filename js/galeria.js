const galeria = [
  '../images/servicios/Babor-spress.jpeg',
  '../images/servicios/velos-de-colageno.jpg',
  '../images/servicios/crash-ampollas.jpg',
  '../images/servicios/cleopatra-h-l.jpg',
  '../images/servicios/chocolaterapia.jpg',
  '../images/servicios/vinoterapia.webp',
  '../images/servicios/cerezoterapia.jpg',
  '../images/servicios/spa-herbal.jpg',
  '../images/servicios/aceite-oliva.jpg',
  '../images/servicios/bambu.jpeg',
  '../images/servicios/relax-oliva.jpg',
  '../images/servicios/masaje-circulatorio.jpg',
  '../images/servicios/podal.jpg',
  '../images/servicios/pilates-estudio.jpg',
  '../images/servicios/yoga.jpg',
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
        ? `<img src="${image}" alt="Imagen ${index}" style="opacity: ${index === active ? "1" : "0"}" />`
        : '';
    })
    .join('');

  document.getElementById('galeria-container').innerHTML = imagesHtml;
};
