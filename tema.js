
// funcion para cambiar el tono de la pantalla
(function () {
    var raiz = document.documentElement;

    function actualizarBoton(tema) {
        var oscuro = tema === 'dark';
        var boton = document.getElementById('btnTema');
        boton.querySelector('.iconoTema').textContent = oscuro ? '☀️' : '🌙';
        boton.setAttribute('aria-label', oscuro ? 'Activar modo claro' : 'Activar modo oscuro');
    }

    var temaInicial = localStorage.getItem('tema') ||  //guarda en una var lo que el usuario eligió la última vez
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); //pregunta si el dispositivo está en modo oscuro
    raiz.setAttribute('data-bs-theme', temaInicial);

    document.addEventListener('DOMContentLoaded', function () {
        actualizarBoton(temaInicial);
        document.getElementById('btnTema').addEventListener('click', function () {
            var nuevo = raiz.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
            raiz.setAttribute('data-bs-theme', nuevo);
            localStorage.setItem('tema', nuevo);
            actualizarBoton(nuevo);
        });
    });
})();
