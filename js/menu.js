// Obtenemos las informaciones de las clases de cada contenedor que se va a usar, para luego modificarles los estilos con "add" y "remove" para anadir y quitar estilos deseados.
const nav = document.getElementById('header-nav-container').classList;
const buttonMenu = document.getElementById('header-menu-button').classList;

// Función que permite al botton alternan entre tener el menú abierto y cerrado. Para ello usamos los id del contenedor del menú y del botón para cambiar sus estilos al hacerse click.

const actionButton = () => {
  console.log('NAV CLASES: ', nav.length);

  // Si el contenedor del navegador tiene solo una clase, quiere decir que el menú está cerrado, y por tanto, al hacerse click, les añadimos las clases para los estilos en el formato abierto.
  if (nav.length === 1) {
    nav.add('header-nav-container-open');
    buttonMenu.add('header-menu-button-open');
  } // De lo contrario, les quitaremos los estilos del formato abierto, para dar la apariencia de cerrar el menú y seguir el flujo natural de la pestaña.
  else {
    nav.remove('header-nav-container-open');
    buttonMenu.remove('header-menu-button-open');
  }
};
