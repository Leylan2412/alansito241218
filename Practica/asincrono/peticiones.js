function cargar() {
    $(document).ready(function () {
        $.ajax({
            url: "datos.txt",
            type: "POST",
            success: function (respuesta) {
                document.getElementById("datos").innerHTML = respuesta;
            },
            error: function () {
                console.log("No fue posible completar la operación");
            }
        });
    });
}

function mensaje() {
    alert("Esperar");
}
let btnCarga = document.getElementById("cargar");
btnCarga.addEventListener("click", cargar);
btnCarga.addEventListener("click", mensaje);