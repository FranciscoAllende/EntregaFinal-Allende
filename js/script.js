// - - - Usuario - - - //
let nombreUsuario = prompt('Bienvenidx a CoderFitness. Ingrese su nombre.');

// - - - Productos y precios - - - //
let productos = [
   {
        nombre: 'Proteína Star',
        precio: 33000,
    },
    {
        nombre: 'Creatina Star',
        precio: 17000,
    },
    {
        nombre: 'Preentreno C4',
        precio: 60000,
    },
    {
        nombre: 'Mass Gainer',
        precio: 15000,
    },
];
// - - - Variables financieras - - - //
let descuentoEfectivo = 0.80;
let descuentoTarjeta = 0.90;
let descuentoMercadoPago = 0.85;

const calcularDescuento = (precio, descuento) => {
    return precio * descuento;
};

let productosAdquiridos = [];

while (true) {
    let opciones = 'Bienvenidx, ' + nombreUsuario + '. ¿Cuál de nuestros productos te interesa?\n';

    for (let i = 0; i < productos.length; i++) {
        opciones += (i + 1) + ' - ' + productos[i].nombre + ' - U$S ' + productos[i].precio + '\n';
    }

    opciones += (productos.length + 1) + ' - Finalizar selección de productos';
    let opcionProducto = prompt(opciones);

    if (opcionProducto >= 1 && opcionProducto <= productos.length) {
        let productoElegido = productos[opcionProducto - 1];
        let metodoPago;

        do {
            let mensajeProducto = 'Elegiste ' + productoElegido.nombre + ' y su precio es U$S ' + productoElegido.precio;
            mensajeProducto += '\nElige un método de pago.\n1 - Efectivo (20% OFF)\n2 - Mercado Pago (15% OFF)\n3 - Tarjeta Débito/Crédito (10% OFF)\n4 - Volver al menú principal';
            metodoPago = prompt(mensajeProducto);

            switch (metodoPago) {
                case '1':
                    let precioFinalEfectivo = calcularDescuento(productoElegido.precio, descuentoEfectivo).toFixed(2);
                    alert('Eligió pagar con efectivo. El precio final es U$S ' + precioFinalEfectivo);
                    alert('¡Felicitaciones! Se realizó correctamente la compra de tu producto: ' + productoElegido.nombre);
                    productosAdquiridos.push(productoElegido);
                    break;
                case '2':
                    let precioFinalMercadoPago = calcularDescuento(productoElegido.precio, descuentoMercadoPago).toFixed(2);
                    alert('Elegió pagar con Mercado Pago. El precio final es U$S ' + precioFinalMercadoPago);
                    alert('¡Felicitaciones! Se realizó correctamente la compra de tu producto: ' + productoElegido.nombre);
                    productosAdquiridos.push(productoElegido);
                    break;
                case '3':
                    let precioFinalTarjeta = calcularDescuento(productoElegido.precio, descuentoTarjeta).toFixed(2);
                    alert('Eligió pagar con tarjeta débito/crédito. El precio final es U$S ' + precioFinalTarjeta);
                    alert('¡Felicitaciones! Se realizó correctamente la compra de tu producto: ' + productoElegido.nombre);
                    productosAdquiridos.push(productoElegido);
                    break;
                case '4':
                    break;
                default:
                    alert('Opción no válida. Por favor seleccioná una opción válida.');
            }
        } while (metodoPago !== '4');
    } else if (opcionProducto == productos.length + 1) {
        break;
    } else {
        alert('Opción no válida. Por favor, seleccioná una opción válida.');
    }
}

if (productosAdquiridos.length > 0) {
    let mensajeProductosAdquiridos = 'Productos adquiridos por ' + nombreUsuario + ':\n';
    for (let i = 0; i < productosAdquiridos.length; i++) {
        mensajeProductosAdquiridos += productosAdquiridos[i].nombre + '\n';
    }
    alert(mensajeProductosAdquiridos);
} else {
    alert('No compró ningún producto en esta sesión.');
}