document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('[data-nav-link]');
    const sections = document.querySelectorAll('article[data-page]');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const targetPage = this.textContent.trim().toLowerCase();

            // Mostrar/ocultar secciones
            sections.forEach(section => {
                if (section.getAttribute('data-page') === targetPage) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });

            // Manejar clase 'active' en los enlaces de navegación
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Mostrar la primera sección y marcar el primer enlace como activo
    sections.forEach((section, index) => {
        if (index === 0) {
            section.style.display = 'block';
            navLinks[index].classList.add('active'); // Agregar clase activa al primer enlace
        } else {
            section.style.display = 'none';
        }
    });
});