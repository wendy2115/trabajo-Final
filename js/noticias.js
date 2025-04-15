// Crear una instancia de XMLHttpRequest
let xhr = new XMLHttpRequest();

// Configurar la solicitud: método GET y la URL del archivo JSON

xhr.open('GET', '../json/noticias.json', true);

// Definir lo que sucede cuando la solicitud se completa

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Convertir la respuesta a JSON
    let noticias = JSON.parse(xhr.responseText);

    // Usar .map() para generar el HTML para cada noticia
    let noticiasHTML = noticias
      .map((noticia, index) => {
        return `
        <div class="noticia-caja">
        <div class="cont-principal">
          <div class="imagen-noticia">
            <img
              src="${noticia.imagen}"
              alt=""
            />
          </div>

          <div class="intro-noticia">
            <h2>${noticia.titulo}</h2>
            <h3>${noticia.subtitulo}</h3>
            <p>${noticia.descripcion}</p>
          </div>
        </div>
      </div>                              
            `;
      })
      .join(''); // Unir todo el HTML generado en un solo string

    // Insertar el HTML generado en el contenedor
    document.getElementById('noticias-container').innerHTML = noticiasHTML;
  }
};

// Enviar la solicitud
xhr.send();
