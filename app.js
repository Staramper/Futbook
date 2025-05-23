document.getElementById("selector").addEventListener("change", function() {
    // Oculta todos los divs de contenido
    document.querySelectorAll(".contenido-opcion").forEach(function(div) {
        div.style.display = "none";
    });
    
    // Muestra solo el div seleccionado
    const opcionSeleccionada = this.value;
    document.getElementById(opcionSeleccionada).style.display = "block";
});