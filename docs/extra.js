document.addEventListener('DOMContentLoaded', function () {
    if (window.driver) {
      const tour = window.driver({
        steps: [
          {
            element: 'h1',
            popover: {
              title: 'Bienvenido',
              description: 'Esta es la documentación oficial de AulaFischX. 🚀',
              position: 'bottom'
            }
          },
          {
            element: 'ul',
            popover: {
              title: 'Contenidos',
              description: 'Aquí encontrarás las secciones disponibles para tu aprendizaje.',
              position: 'right'
            }
          },
          {
            element: '.md-nav__list',
            popover: {
              title: 'Navegación',
              description: 'Usa este menú para moverte entre los temas de la documentación.',
              position: 'right'
            }
          }
        ]
      });
  
      const startButton = document.getElementById('start-tour');
      if (startButton) {
        startButton.addEventListener('click', function() {
          tour.drive();
        });
      }
    } else {
      console.error('Driver.js no está cargado aún.');
    }
  });
  