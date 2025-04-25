// Obtener el elemento del logo y la sección 'Nuestros Servicios'
const logo = document.querySelector('.logo');
const serviciosSection = document.querySelector('.servicios');

// Función que detecta el scroll y cambia la visibilidad del logo
function handleScroll() {
  const serviciosPosition = serviciosSection.getBoundingClientRect().top;
  
  // Si la sección 'Nuestros Servicios' está en la pantalla
  if (serviciosPosition <= window.innerHeight / 1.5) {
    logo.classList.add('hide-logo');
  } else {
    logo.classList.remove('hide-logo');
  }
}


// Agregar el evento de scroll al documento
window.addEventListener('scroll', handleScroll);
