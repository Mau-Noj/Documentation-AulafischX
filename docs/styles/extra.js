// Cambiar el header y tabs cuando haces scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('.md-header');
  const tabs = document.querySelector('.md-tabs');

  if (window.scrollY > 30) {
    header.classList.add('md-header--scrolled');
    if (tabs) tabs.classList.add('md-tabs--scrolled');
  } else {
    header.classList.remove('md-header--scrolled');
    if (tabs) tabs.classList.remove('md-tabs--scrolled');
  }
});

// Shepherd.js tour con botón dinámico de bombilla
window.addEventListener('load', function() {
  if (typeof Shepherd !== 'undefined') {
    const tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        classes: 'shadow-md bg-purple-dark',
        scrollTo: true,
        cancelIcon: { enabled: true }
      }
    });

    // Pasos del tour
    tour.addStep({
      title: '¡Bienvenido a AulaFischX!',
      text: 'Esta es la plataforma oficial para gestionar cursos y estudiantes.',
      buttons: [{ text: 'Siguiente', action: tour.next }]
    });

    tour.addStep({
      title: 'Empezar Ahora',
      text: 'Haz clic aquí para comenzar con el proceso.',
      attachTo: { element: '.md-button--primary', on: 'bottom' },
      buttons: [
        { text: 'Atrás', action: tour.back },
        { text: 'Siguiente', action: tour.next }
      ]
    });

    tour.addStep({
      title: 'Conocer al Desarrollador',
      text: 'Aquí puedes conocer quién construyó esta plataforma.',
      attachTo: { element: '.hero-buttons .md-button:not(.md-button--primary)', on: 'bottom' },
      buttons: [
        { text: 'Atrás', action: tour.back },
        { text: 'Finalizar', action: tour.complete }
      ]
    });

    // Botón flotante
    const helpButton = document.getElementById('help-tour-button');
    if (helpButton) {
      helpButton.addEventListener('mouseenter', () => {
        helpButton.classList.add('help-on'); // 🔥 Se prende al pasar el mouse
      });
      helpButton.addEventListener('mouseleave', () => {
        helpButton.classList.remove('help-on'); // 🔥 Se apaga al salir el mouse
      });
      helpButton.addEventListener('click', () => {
        helpButton.classList.add('help-on'); // 🔥 Asegura que siga prendido cuando lo clickean
        tour.start();
      });
    }
  } else {
    console.error('Shepherd.js no está cargado.');
  }
});
