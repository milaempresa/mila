// Función para obtener los parámetros de la URL
function obtenerParametroURL(nombre) {
    const params = new URLSearchParams(window.location.search);
    return params.get(nombre);
}

window.onload = function() {
    // Obtener los datos del producto y el precio desde la URL
    const producto = obtenerParametroURL("producto");
    const precio = obtenerParametroURL("precio");

    // Asignar valores al formulario si existen en la URL
    if (producto) document.getElementById("producto").value = producto;
    if (precio) document.getElementById("precio").value = precio;
}

function procesarPedido() {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const direccion = document.getElementById("direccion").value;
    const producto = document.getElementById("producto").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const precio = parseFloat(document.getElementById("precio").value);
    const pago = document.getElementById("pago").value;

    // Calcula el total
    const total = cantidad * precio;

    // Mostrar mensaje de confirmación al cliente
    document.getElementById("mensajeConfirmacion").style.display = "block";
    document.getElementById("nombreCliente").textContent = nombre;

    // Limpiar formulario después de enviar
    document.getElementById("orderForm").reset();

    // Guardar datos temporalmente en la consola para verificar
    console.log("Pedido recibido:");
    console.log("Cliente:", nombre);
    console.log("Teléfono:", telefono);
    console.log("Email:", email);
    console.log("Dirección:", direccion);
    console.log("Producto:", producto);
    console.log("Cantidad:", cantidad);
    console.log("Precio Unitario:", precio);
    console.log("Total:", total);
    console.log("Método de Pago:", pago);
}