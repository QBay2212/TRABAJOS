var cliente = document.getElementById("cliente");
var doc = document.getElementById("doc");
var cant = document.getElementById("cant");
var precio = document.getElementById("precio");
var prod = document.getElementById("prod");
var table = document.getElementById("table");
var tbd = document.getElementById("tbd");
var subtotal = precio * cant;
var filita = "";
var estado = 0;
function guardar() {
    if (estado == 0) {

        var fila = document.createElement("tr");
        //cliente
        console.log(cliente.value)
        var celda_cliente = document.createElement("td");
        celda_cliente.innerHTML = cliente.value;

        //documento
        var celda_doc = document.createElement("td");
        celda_doc.innerHTML = doc.value;

        //Producto
        var celda_producto = document.createElement("td");
        celda_producto.innerHTML = prod.value;

        //cantidad
        var celda_cantidad = document.createElement("td");
        celda_cantidad.innerHTML = cant.value;
        //Precio
        var celda_precio = document.createElement("td");
        celda_precio.innerHTML = precio.value;
        //Subtotal
        var celda_subtotal = document.createElement("td");
        celda_subtotal.innerHTML = subtotal.value;
        //Accion
        var celda_accion = document.createElement("td");
        celda_accion.innerHTML =
            "<a href='#' class='icono2' onclick='editar(this)'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></a>"
            + "<a href='#' class='icono1' onclick='eliminar(this)'><i class='fa fa-trash' aria-hidden='true'></i></a>";
        fila.appendChild(celda_cliente);
        fila.appendChild(celda_doc);
        fila.appendChild(celda_producto);
        fila.appendChild(celda_precio);
        fila.appendChild(celda_cantidad);
        fila.appendChild(celda_subtotal);
        fila.appendChild(celda_accion);
        tbd.appendChild(fila);
        table.appendChild(tbd);
        limpiar();
    } else {
        filita.cells[0].innerHTML = cliente.value;
        filita.cells[1].innerHTML = doc.value;
        filita.cells[2].innerHTML = prod.value;
        filita.cells[3].innerHTML = cant.value;
        filita.cells[4].innerHTML = precio.value;
        filita.cells[5].innerHTML = subtotal.value;
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
    cliente.value = filita.cells[0].innerHTML;
    doc.value = filita.cells[1].innerHTML;
    prod.value = filita.cells[2].innerHTML;
    cant.value = filita.cells[3].innerHTML;
    precio.value = filita.cells[4].innerHTML;
    subtotal.value = filita.cells[5].innerHTML;
    estado = 1;
}
function limpiar() {
    cliente.value = "";
    doc.value = "";
    prod.value = "";
    cant.value = "";
    precio.value = "";
    subtotal.value = "";
    cliente.focus();
}
function subtotal() {
    
}