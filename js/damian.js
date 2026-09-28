document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btn-animar-damian');
    const mensaje = document.getElementById('mensaje-animado');
    // Busca la imagen de tu avatar o la tarjeta principal
    const avatar = document.querySelector('.avatar-perfil') || document.querySelector('.tarjeta-perfil img');

    if (boton) {
        boton.addEventListener('click', () => {
            // 1. Mostrar/ocultar mensaje de saludo con transición
            mensaje.textContent = "👋 ¡Hola! Bienvenido al perfil de Damián Gorosito.";
            mensaje.classList.toggle('mensaje-visible');

            // 2. Disparar animación de brillo y escala en el avatar
            if (avatar) {
                avatar.classList.add('animacion-efecto');
                
                // Remueve la clase al finalizar para poder reusarla
                setTimeout(() => {
                    avatar.classList.remove('animacion-efecto');
                }, 1000);
            }
        });
    }
});
