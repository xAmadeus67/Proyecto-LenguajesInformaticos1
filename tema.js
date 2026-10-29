// se agrega funcion de poner pantalla oscura
(function () {
    var raiz = document.documentElement;

    function leerGuardado() {
        try { return localStorage.getItem('tema'); } catch (e) { return null; }
    }
    function guardar(tema) {
        try { localStorage.setItem('tema', tema); } catch (e) {}
    }
    function actualizarBoton(tema) {
        var boton = document.getElementById('btnTema');
        if (!boton) return;
        var oscuro = tema === 'dark';
        boton.querySelector('.iconoTema').textContent = oscuro ? '☀️' : '🌙';
        boton.setAttribute('aria-pressed', oscuro);
        boton.setAttribute('aria-label', oscuro ? 'Activar modo claro' : 'Activar modo oscuro');
    }
    function aplicar(tema) {
        raiz.setAttribute('data-bs-theme', tema);
        actualizarBoton(tema);
    }


    var preferido = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var temaInicial = leerGuardado() || preferido;
    raiz.setAttribute('data-bs-theme', temaInicial);

    document.addEventListener('DOMContentLoaded', function () {
        actualizarBoton(raiz.getAttribute('data-bs-theme'));
        var boton = document.getElementById('btnTema');
        if (!boton) return;
        boton.addEventListener('click', function () {
            var nuevo = raiz.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
            aplicar(nuevo);
            guardar(nuevo);
        });
    });
})();
