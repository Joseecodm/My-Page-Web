window.onload = function() {
    setTimeout(function() {
        // Ocultar la pantalla de bienvenida
        document.querySelector('.welcome-screen').style.opacity = 0;
        
        // Mostrar el contenido principal después de la animación
        setTimeout(function() {
            document.querySelector('.welcome-screen').style.display = 'none';
            document.querySelector('.main-content').style.display = 'block';
        }, 1000); // Esperar que termine la animación de desvanecimiento
    }, 2000); // Tiempo que dura la pantalla de bienvenida (2 segundos)
};
