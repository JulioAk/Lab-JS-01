// Función para aplicar el descuento según la cantidad
function aplicarDescuento(precio, cantidad) {
    let descuento = 0;
    if (cantidad < 10) {
        descuento = 3.5;
    } else if (cantidad >= 10 && cantidad < 20) {
        descuento = 7.0;
    } else if (cantidad >= 20) {
        descuento = 9.5;
    }

    let descuentoProc = descuento / 100;
    let precioTotal = precio * cantidad * (1 - descuentoProc);
    return precioTotal;
}

// Función principal (punto de entrada del programa)
function main() {
    const precioProducto1 = 70.99;
    const precioProducto2 = 78.99;
    const precioProducto3 = 100.99;
    const precioProducto4 = 58.50;
    const precioProducto5 = 35.00;

    let continuarComprando = true;

    while (continuarComprando) {

        // Mostrar opciones al cliente
        const opcion = parseInt(prompt(`Seleccione un Producto (1-5):
        "1. Monopolio | $70.99"
        "2. Ajedrez   | $78.99"
        "3. Lego      | $100.99"
        "4. Dama      | $58.50"
        "5. Laberinto | $35.00"
    `));

        // Validar la cantidad ingresada
        let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
        while (isNaN(cantidad) || cantidad < 1) {
            alert("La cantidad ingresada no es válida. Por favor, ingrese un número mayor o igual a 1.");
            cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
        }

        // Calcular el precio total aplicando el descuento si corresponde
        switch (opcion) {
            case 1:
                const precioTotalA = aplicarDescuento(precioProducto1, cantidad);
                alert(`Precio total es: $${precioTotalA.toFixed(2)}`);
                break;
            case 2:
                const precioTotalB = aplicarDescuento(precioProducto2, cantidad);
                alert(`Precio total es: $${precioTotalB.toFixed(2)}`);
                break;
            case 3:
                const precioTotalC = aplicarDescuento(precioProducto3, cantidad);
                alert(`Precio total es: $${precioTotalC.toFixed(2)}`);
                break;
            case 4:
                const precioTotalD = aplicarDescuento(precioProducto4, cantidad);
                alert(`Precio total es: $${precioTotalD.toFixed(2)}`);
                break;
            case 5:
                const precioTotalE = aplicarDescuento(precioProducto5, cantidad);
                alert(`Precio total es: $${precioTotalE.toFixed(2)}`);
                break;
            default:
                alert("Opción no válida.");
        }

        // Preguntar si el cliente desea volver a comprar
        const respuesta = prompt("¿Desea volver a comprar? (s/n)").toLowerCase();
        if (respuesta !== "s") {
            continuarComprando = false;
        }
    }
    alert("Gracias por su compra. ¡Hasta luego!");
}

// Llamar a la función principal para ejecutar el programa
main();



