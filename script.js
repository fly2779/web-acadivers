// Obtener el logo y la sección de Servicios
const logo = document.querySelector('.logo');
const serviciosSection = document.querySelector('.servicios');

// Función para manejar el scroll
function handleScroll() {
  const serviciosPosition = serviciosSection.getBoundingClientRect().top;

  if (serviciosPosition <= window.innerHeight / 1.5) {
    logo.classList.add('hide-logo');
  } else {
    logo.classList.remove('hide-logo');
  }
}

// Evento de scroll
window.addEventListener('scroll', handleScroll);
