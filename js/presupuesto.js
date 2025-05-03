const validateForm = () => {
  document
    .getElementById('agendar-form')
    .addEventListener('submit', function (event) {
      event.preventDefault(); // ❌ Evita la recarga automática
    });

  const errors = [];
  const errorsHtml = document.getElementById('agendar-errors');
  const exitosoHtml = document.getElementById('agendar-exitoso');

  const inputName = document.getElementById('nombre').value;
  const inputApellido = document.getElementById('apellidos').value;
  const inputTelefono = document.getElementById('telefono').value;
  const inputEmail = document.getElementById('email').value;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexOnlyText = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  const regexOnlyNumber = /^[0-9]+$/;

  if (inputName.length > 15)
    errors.push('Nombre no puede tener más de 15 carácteres.');

  if (!regexOnlyText.test(inputName))
    errors.push('El nombre debe tener sólo letras.');

  if (inputApellido.length > 40)
    errors.push('Apellido debe tener una longitud máxima de 40 caracteres.');

  if (!regexOnlyText.test(inputApellido))
    errors.push('Apellido debe tener sólo letras.');

  if (inputTelefono.length !== 9) errors.push('Debe tener nueve dígitos.');

  if (!regexOnlyNumber.test(inputTelefono))
    errors.push('El  télefono debe contener sólo números.');

  if (!regexEmail.test(inputEmail)) errors.push('Escribe un correo válido');

  console.log('errors:', errors);

  let errorsView = errors
    .map((err, index) => {
      return `<p class="agendar-errors">${err}</p>
        `;
    })
    .join('<br>');

  if (errors.length > 0) {
    errorsHtml.innerHTML = errorsView;
    exitosoHtml.innerHTML = '';
    return;
  } else {
    errorsHtml.innerHTML = '';
    exitosoHtml.innerHTML = `<p class="agendar-exitoso">Formulario enviado exitosamente</p>`;
    return;
  }
};

//Presupuesto
let monto = 0;
const setAmount = (value) => {
  switch (value) {
    case 'babor-spress':
      monto = 35;
      break;

    case 'velos-de-colágeno':
      monto = 60;
      break;

    case 'crash-ampollas':
      monto = 90;
      break;

    case 'chocolaterapia':
      monto = 55;
      break;

    case 'vinoterapia':
      monto = 80;
      break;

    default:
      monto = 0;
      break;
  }

  console.log('monto', monto);
};

document.getElementById('servicio').addEventListener('change', function () {
  setAmount(this.value);
});
