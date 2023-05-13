//Función para mostrar la información detallada del producto al hacer clic en la imagen
function mostrarDetalle(id) {
  var detalle = document.getElementById(id + "-detalle");
  detalle.style.display = "block";
}

//Función para ocultar la información detallada del producto al hacer clic en el botón "Cerrar"
function ocultarDetalle(id) {
  var detalle = document.getElementById(id + "-detalle");
  detalle.style.display = "none";
}

//Función para buscar productos por nombre del artista o tipo de arte o concepto
function buscarProductos() {
  var input = document.getElementById("busqueda");
  var filtro = input.value.toUpperCase();
  var productos = document.getElementsByClassName("producto");

  for (var i = 0; i < productos.length; i++) {
    var nombreArtista = productos[i].getElementsByClassName("nombre-artista")[0].textContent.toUpperCase();
    var tipoArte = productos[i].getElementsByClassName("tipo-arte")[0].textContent.toUpperCase();
    var concepto = productos[i].getElementsByClassName("concepto")[0].textContent.toUpperCase();

    if (nombreArtista.includes(filtro) || tipoArte.includes(filtro) || concepto.includes(filtro)) {
      productos[i].style.display = "";
    } else {
      productos[i].style.display = "none";
    }
  }
}

// IMAGENES GALERIA - INICIO

// Selecciona todas las imágenes con la clase "enlace"
const enlaces1 = document.querySelectorAll('.enlace1');
const enlaces2 = document.querySelectorAll('.enlace2');
const enlaces3 = document.querySelectorAll('.enlace3');
const enlaces4 = document.querySelectorAll('.enlace4');
const enlaces5 = document.querySelectorAll('.enlace5');
const enlaces6 = document.querySelectorAll('.enlace6');
const enlaces7 = document.querySelectorAll('.enlace7');
const enlaces8 = document.querySelectorAll('.enlace8');
const enlaces9 = document.querySelectorAll('.enlace9');
const enlaces10 = document.querySelectorAll('.enlace10');
const enlaces11 = document.querySelectorAll('.enlace11');
const enlaces12 = document.querySelectorAll('.enlace12');

// Agrega un listener de evento de clic a cada imagen
enlaces1.forEach((enlace1) => {
  enlace1.addEventListener('click', () => {
    // Navega a la página imagen1.html
    window.location.href = 'imagen1.html';
  });
});

enlaces2.forEach((enlace2) => {
  enlace2.addEventListener('click', () => {
    // Navega a la página imagen2.html
    window.location.href = 'imagen2.html';
  });
});

enlaces3.forEach((enlaces3) => {
  enlaces3.addEventListener('click', () => {
    // Navega a la página imagen3.html
    window.location.href = 'imagen3.html';
  });
});

enlaces4.forEach((enlace4) => {
  enlace4.addEventListener('click', () => {
    // Navega a la página imagen4.html
    window.location.href = 'imagen4.html';
  });
});

enlaces5.forEach((enlace5) => {
  enlace5.addEventListener('click', () => {
    // Navega a la página imagen5.html
    window.location.href = 'imagen5.html';
  });
});

enlaces6.forEach((enlace6) => {
  enlace6.addEventListener('click', () => {
    // Navega a la página imagen6.html
    window.location.href = 'imagen6.html';
  });
});

enlaces7.forEach((enlace7) => {
  enlace7.addEventListener('click', () => {
    // Navega a la página imagen7.html
    window.location.href = 'imagen7.html';
  });
});

enlaces8.forEach((enlace8) => {
  enlace8.addEventListener('click', () => {
    // Navega a la página imagen8.html
    window.location.href = 'imagen8.html';
  });
});

enlaces9.forEach((enlace9) => {
  enlace9.addEventListener('click', () => {
    // Navega a la página imagen9.html
    window.location.href = 'imagen9.html';
  });
});

enlaces10.forEach((enlace10) => {
  enlace10.addEventListener('click', () => {
    // Navega a la página imagen10.html
    window.location.href = 'imagen10.html';
  });
});

enlaces11.forEach((enlace11) => {
  enlace11.addEventListener('click', () => {
    // Navega a la página imagen11.html
    window.location.href = 'imagen11.html';
  });
});

enlaces12.forEach((enlace12) => {
  enlace12.addEventListener('click', () => {
    // Navega a la página imagen12.html
    window.location.href = 'imagen12.html';
  });
});

if (document.querySelector('#container-slider')) {
  setInterval('fntExecuteSlide("next")', 5000);
}
//------------------------------ LIST SLIDER -------------------------
if (document.querySelector('.listslider')) {
  let link = document.querySelectorAll(".listslider li a");
  link.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let item = this.getAttribute('itlist');
      let arrItem = item.split("_");
      fntExecuteSlide(arrItem[1]);
      return false;
    });
  });
}

function fntExecuteSlide(side) {
  let parentTarget = document.getElementById('slider');
  let elements = parentTarget.getElementsByTagName('li');
  let curElement, nextElement;

  for (var i = 0; i < elements.length; i++) {

    if (elements[i].style.opacity == 1) {
      curElement = i;
      break;
    }
  }
  if (side == 'prev' || side == 'next') {

    if (side == "prev") {
      nextElement = (curElement == 0) ? elements.length - 1 : curElement - 1;
    } else {
      nextElement = (curElement == elements.length - 1) ? 0 : curElement + 1;
    }
  } else {
    nextElement = side;
    side = (curElement > nextElement) ? 'prev' : 'next';

  }
  //RESALTA LOS PUNTOS
  let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
  elementSel[curElement].classList.remove("item-select-slid");
  elementSel[nextElement].classList.add("item-select-slid");
  elements[curElement].style.opacity = 0;
  elements[curElement].style.zIndex = 0;
  elements[nextElement].style.opacity = 1;
  elements[nextElement].style.zIndex = 1;
}


// GALERIA
$(document).ready(function () {
  // cuando se haga clic en una miniatura de imagen
  $(".image-thumbnails img").click(function () {
    // obtenemos la URL de la imagen grande
    var imageUrl = $(this).attr("src").replace("-miniatura", "");

    // actualizamos la imagen principal con la nueva URL
    $(".image-container img").attr("src", imageUrl);
  });
});

// INICIAR SESION
const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  // Aquí deberías hacer una petición a un servidor para verificar las credenciales del usuario y obtener un token de autenticación

  // Por ahora, simplemente vamos a mostrar un mensaje en la consola
  console.log(`Iniciar sesión con correo electrónico "${email}" y contraseña "${password}"`);
});

// REGISTRARSE
const form2 = document.getElementById('register-form');

form2.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const confirmPassword = form2['confirm-password'].value;

  // Aquí deberías hacer una petición a un servidor para registrar al usuario

  // Por ahora, simplemente vamos a mostrar un mensaje en la consola
  console.log(`Registrarse con nombre "${name}", correo electrónico "${email}" y contraseña "${password}"`);
});






