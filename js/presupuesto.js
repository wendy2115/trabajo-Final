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

const presupuestoView = (monto, descuentoPorcentaje, extras) => {
  const view = document.getElementById('agendar-presupuesto');

  let descuentoValor = (monto * descuentoPorcentaje) / 100;
  let total = monto - descuentoValor + extras;

  view.innerHTML = `
  <table class="agendar-tabla">
    <thead>
      <tr>
        <th>Concepto</th>
        <th>Monto (€)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Servicio</td>
        <td class="agendar-tabla-monto">${monto}€</td>
      </tr>
      <tr>
        <td>Descuento al servicio por los dias seleccionados</td>
        <td class="agendar-tabla-monto">-${descuentoValor}€</td>
      </tr>
      <tr>
        <td>Extras</td>
        <td class="agendar-tabla-monto">${extras}€</td>
      </tr>
      <tr>
        <td>Total a pagar</td>
        <td class="agendar-tabla-monto">${total}€</td>
      </tr>
    </tbody>
  </table>
  `;
};

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
};

document.getElementById('servicio').addEventListener('change', function () {
  setAmount(this.value);
  presupuestoView(monto, descuentoPorcentaje, extras);
});

//Duración

let duration = 0;
let descuentoPorcentaje = 0;

const setDuration = (daysStr) => {
  const days = Number(daysStr);

  if (days <= 1) {
    descuentoPorcentaje = 0;
  } else if (days > 1 && days < 8) {
    descuentoPorcentaje = 5;
  } else if (days >= 8 && days < 15) {
    descuentoPorcentaje = 10;
  } else if (days >= 15 && days < 20) {
    descuentoPorcentaje = 15;
  } else if (days >= 20 && days < 30) {
    descuentoPorcentaje = 20;
  } else if (days >= 30) {
    descuentoPorcentaje = 40;
  } else {
    descuentoPorcentaje = 0;
  }

  duration = days;
};

document.getElementById('duracion').addEventListener('change', function () {
  setDuration(this.value);
  presupuestoView(monto, descuentoPorcentaje, extras);
});

// Extras
let extras = 0;
const setExtras = (value, isAdd) => {
  if (isAdd) {
    extras = extras + value;
  } else {
    extras = extras - value;
  }
};

document.getElementById('extra-diez').addEventListener('change', function () {
  setExtras(5, this.checked);
  presupuestoView(monto, descuentoPorcentaje, extras);
});

document.getElementById('extra-masaje').addEventListener('change', function () {
  setExtras(10, this.checked);
  presupuestoView(monto, descuentoPorcentaje, extras);
});
