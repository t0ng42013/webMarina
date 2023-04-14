function iniciar() {
    const inicio = document.querySelector('.uno');
    const acerca = document.querySelector('.dos');
    const servicio = document.querySelector('.tres');

    const contenido1 = document.getElementById("uno");
    const contenido2 = document.getElementById("dos");
    const contenido3 = document.getElementById("tres");

    // Agregar controladores de eventos a los botones
    inicio.addEventListener("click", () => {
        contenido2.style.display = "none";
        contenido3.style.display = "none";
        contenido1.style.display = "flex";
    });

    acerca.addEventListener("click", () => {
        contenido1.style.display = "none";
        contenido3.style.display = "none";
        contenido2.style.display = "flex";
    });

    servicio.addEventListener("click", () => {
        contenido1.style.display = "none";
        contenido2.style.display = "none";
        contenido3.style.display = "flex";
    });

    _toggle.onclick = () => {
                _items.classList.toggle("open");
                _toggle.classList.toggle("close");
    }
}
window.onload = iniciar;