# Bienvenido a AulaFischX

Esta es la documentación de la plataforma educativa AulaFischX.

## Contenidos
- Registro de estudiantes
- Creación de cursos
- Asignación de roles
- Evaluaciones y reportes

# ¡Bienvenido a AulaFischX! 🚀

<button id="start-tour" style="padding:10px 20px; background:#007bff; color:white; border:none; border-radius:5px; cursor:pointer;">
Iniciar recorrido
</button>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const driver = window.driver.js.driver;

    const tour = driver({
      steps: [
        {
          element: 'h1', // Título principal "Bienvenido a AulaFischX"
          popover: {
            title: 'Bienvenido',
            description: 'Esta es la documentación oficial de AulaFischX. 🚀',
            position: 'bottom'
          }
        },
        {
          element: 'ul', // Lista de contenidos
          popover: {
            title: 'Contenidos',
            description: 'Aquí encontrarás las secciones disponibles para tu aprendizaje.',
            position: 'right'
          }
        },
        {
          element: '.md-nav__list', // Menú lateral izquierdo
          popover: {
            title: 'Navegación',
            description: 'Usa este menú para explorar la documentación por temas.',
            position: 'right'
          }
        }
      ]
    });

    const startButton = document.querySelector('button');
    if (startButton) {
      startButton.addEventListener('click', function() {
        tour.drive();
      });
    }
  });
</script>
