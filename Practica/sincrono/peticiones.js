function cargar() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 & this.status == 200){
            document.getElementById("datos").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "datos.txt", false); //NOTA: False es síncrono y TRUE es asíncrono.
    xhttp.send();
}

function mensaje() {
    alert("Cargando la función");
}
let btnCarga = document.getElementById("cargar");
btnCarga.addEventListener("click", cargar);
btnCarga.addEventListener("click", mensaje);