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
document.getElementById('start-tour').addEventListener('click', function() {
    const driver = new Driver();

    driver.highlight([
      {
        element: '#start-tour',
        popover: {
          title: '¡Aquí empieza!',
          description: 'Haz clic para iniciar un recorrido por AulaFischX.',
          position: 'bottom'
        }
      },
      {
        element: '.md-header-nav__title',
        popover: {
          title: 'Título del sitio',
          description: 'Este es el nombre de tu documentación.',
          position: 'bottom'
        }
      },
      {
        element: '.md-search__form',
        popover: {
          title: 'Buscador',
          description: 'Usa el buscador para encontrar contenido rápidamente.',
          position: 'bottom'
        }
      }
    ]);
});
</script>
