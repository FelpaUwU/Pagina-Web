let mensajeNuevo="El mensaje ha sido actualizado satisfactoriamente"
function cambiarMensaje() {
    document.getElementById("mensaje").innerText = mensajeNuevo;
}

$(document).ready(function() {
    $('#btn-cambiar').click(function() {
        $('.tarjeta').css('background', 'radial-gradient(circle, rgba(0,255,255,1) 0%, rgba(255,0,255,1) 100%)');

        $('.nombre p').css('color', 'white'); 
        $('.titulo p').css('color', 'white'); 
        $('.descripcion p').css('color', 'white');

        alert("¡Todo ha cambiado!");
    });
});
