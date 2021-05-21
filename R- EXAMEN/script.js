var fecha = document.getElementById("fecha");
var cliente = document.getElementById("cliente");
var prod = document.getElementById("prod");
var precio = document.getElementById("precio");
var cant = document.getElementById("cantidad");
var subto = document.getElementById("subto");
var table = document.getElementById("table");
var tbd = document.getElementById("tbd");
var filita = "";
var estado = 0;
function guardar() {
    if (estado == 0) {

        var fila = document.createElement("tr");
        //fecha
        var celda_fecha = document.createElement("td");
        celda_fecha.innerHTML = fecha.value;
        //cliente
        console.log(cliente.value)
        var celda_cliente = document.createElement("td");
        celda_cliente.innerHTML = cliente.value;
        //Producto
        var celda_producto = document.createElement("td");
        celda_producto.innerHTML = prod.value;
        //Precio
        var celda_precio = document.createElement("td");
        celda_precio.innerHTML = precio.value;
        //cantidad
        var celda_cantidad = document.createElement("td");
        celda_cantidad.innerHTML = cant.value;
        //Accion
        var celda_accion = document.createElement("td");
        celda_accion.innerHTML =
            "<a href='#' class='icono2' onclick='editar(this)'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></a>"
            + "<a href='#' class='icono1' onclick='eliminar(this)'><i class='fa fa-trash' aria-hidden='true'></i></a>";
        fila.appendChild(celda_fecha);
        fila.appendChild(celda_cliente);
        fila.appendChild(celda_producto);
        fila.appendChild(celda_precio);
        fila.appendChild(celda_cantidad);
        fila.appendChild(celda_subtotal);
        fila.appendChild(celda_accion);
        tbd.appendChild(fila);
        table.appendChild(tbd);
        limpiar();
    } else {
        filita.cells[0].innerHTML = fecha.value;
        filita.cells[1].innerHTML = cliente.value;
        filita.cells[2].innerHTML = prod.value;
        filita.cells[3].innerHTML = precio.value
        filita.cells[4].innerHTML = cant.value;
        filita.cells[5].innerHTML = subto.value;
        limpiar();
        estado = 0;
    }
}
function eliminar(row) {
    var fil = row.parentNode.parentNode;
    fil.parentNode.removeChild(fil);
}
function editar(row) {
    filita = row.parentNode.parentNode;
    fecha.value = filita.cells[0].innerHTML;
    cliente.value = filita.cells[1].innerHTML;
    prod.value = filita.cells[2].innerHTML;
    precio.value = filita.cells[3].innerHTML;
    cant.value = filita.cells[4].innerHTML;
    subto.value = filita.cells[5].innerHTML;
    estado = 1; 
}
function limpiar() {
    fecha.value = "";
    cliente.value = "";
    prod.value = "";
    precio.value = "";
    cant.value = "";
    subto.value = "";
    cliente.focus();
} 
