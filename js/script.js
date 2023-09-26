// Hola profe! El proyecto que elegí es un menú de compras de productos fitness, con precios, métodos de pago y descuentos. (Mi proyecto anterior de Desarrollo Web tenía que ver con una página de un gimnasio, es probable que lo continúe)


// usuario //
let nombreUsuario = prompt('Bienvenidx a CoderFitness. Ingrese su nombre.');

// variables de productos
let proteina1 = 'Proteína Star';
let creatina1 = 'Creatina Star';
let preentreno1 = 'Preentreno C4';
let massgainer1 = 'Mass Gainer';

// variables financieras
let precioProteina1 = 33000;
let precioCreatina1 = 17000;
let precioPreentreno1 = 60000;
let precioMassgainer1 = 15000;
let descuentoEfectivo = 0.80;
let descuentoMercadoPago = 0.85;
let descuentoTarjeta = 0.90;

// variables para cálculos
const calcularDescuento = (a, b) => {
    return a * b;
}

let opcionesFitness;

do {
    opcionesFitness = prompt('Bienvenidx, ' + nombreUsuario + ', ¿qué producto le interesa? \n1 - ' + proteina1 + '\n2 - ' + creatina1 + '\n3 - ' + preentreno1 + '\n4 - ' + massgainer1 + '\n5 - Salir del menú de compras');

    switch (opcionesFitness) {
        case '1':
            let metodoPago1;
            do {
                metodoPago1 = prompt('Eligió ' + proteina1 + ' y su precio es de U$S' + precioProteina1 + '. Elegí un método de pago. \n1 - Tarjeta Débito/Crédito (10% OFF) \n2 - Mercado Pago (15% OFF) \n3 - Efectivo (20% OFF) \n4 - Volver');
                switch (metodoPago1) {
                    case '1':
                        let precioFinalTarjeta = calcularDescuento(precioProteina1, descuentoTarjeta);
                        alert('Eligió pagar con tarjeta de débito/crédito. El precio final es U$S ' + precioFinalTarjeta);
                        alert('¡Felicitaciones! ¡Se realizó correctamente la compra de tu producto! ' + proteina1);
                        break;
                    case '2':
                        let precioFinalMercadoPago = calcularDescuento(precioProteina1, descuentoMercadoPago);
                        alert('Eligió pagar con Mercado Pago. El precio final es U$S ' + precioFinalMercadoPago);
                        alert('¡Felicitaciones! ¡Se realizó correctamente la compra de tu producto! ' + proteina1);
                        break;
                    case '3':
                        let precioFinalEfectivo = calcularDescuento(precioProteina1, descuentoEfectivo);
                        alert('Eligió pagar con Efectivo. El precio final es U$S ' + precioFinalEfectivo);
                        alert('¡Felicitaciones! ¡Se realizó correctamente la compra de tu producto! ' + proteina1);
                        break;
                    case '4':
                        break;
                    default:
                        alert('Opción no válida. Por favor seleccioná una opción válida.');
                }
            } while (metodoPago1 !== '4'); 
            break;

        case '2':
            let metodoPago2;
            do {
                metodoPago2 = prompt('Eligió ' + creatina1 + ' y su precio es de U$S ' + precioCreatina1 + '. Elegí un método de pago. \n1 - Tarjeta Débito/Crédito (10% OFF) \n2 - Mercado Pago (15% OFF) \n3 - Efectivo (20% OFF) \n4 - Volver');
                switch (metodoPago2) {
                    case '1':
                        let precioFinalTarjeta = calcularDescuento(precioCreatina1, descuentoTarjeta);
                        alert('Eligió pagar con tarjeta de débito/crédito. El precio final es U$S ' + precioFinalTarjeta);
                        alert('¡Felicitaciones! ¡Se realizó correctamente la compra de tu producto! ' + creatina1);
                        break;
                    case '2':
                        let precioFinalMercadoPago = calcularDescuento(precioCreatina1, descuentoMercadoPago);
                        alert('Eligió pagar con Mercado Pago. El precio final es U$S ' + precioFinalMercadoPago);
                        alert('¡Felicitaciones!¡Se realizó correctamente la compra de tu producto!o ' + creatina1);
                        break;
                    case '3':
                        let precioFinalEfectivo = calcularDescuento(precioCreatina1, descuentoEfectivo);
                        alert('Eligió pagar con Efectivo. El precio final es U$S ' + precioFinalEfectivo);
                        alert('¡Felicitaciones!¡Se realizó correctamente la compra de tu producto!o ' + creatina1);
                        break;
                    case '4':
                        break;
                    default:
                        alert('Opción no válida. Por favor seleccioná una opción válida.');
                }
            } while (metodoPago2 !== '4'); 
            break;

        case '3':
            let metodoPago3;
            do {
                metodoPago3 = prompt('Eligió ' + preentreno1 + ' y su precio es de U$S ' + precioPreentreno1 + '. Elegí un método de pago. \n1 - Tarjeta Débito/Crédito (10% OFF) \n2 - Mercado Pago (15% OFF) \n3 - Efectivo (20% OFF) \n4 - Volver');
                switch (metodoPago3) {
                    case '1':
                        let precioFinalTarjeta = calcularDescuento(precioPreentreno1, descuentoTarjeta);
                        alert('Eligió pagar con tarjeta de débito/crédito. El precio final es de U$S ' + precioFinalTarjeta);
                        alert('¡Felicitaciones! ¡Se realizó correctamente la compra de tu producto! ' + preentreno1);
                        break;
                    case '2':
                        let precioFinalMercadoPago = calcularDescuento(precioPreentreno1, descuentoMercadoPago);
                        alert('Eligió pagar con Mercado Pago. El precio final es de U$S ' + precioFinalMercadoPago);
                        alert('¡Felicitaciones! ¡Se realizó correctamente la compra de tu producto! ' + preentreno1);
                        break;
                    case '3':
                        let precioFinalEfectivo = calcularDescuento(precioPreentreno1, descuentoEfectivo);
                        alert('Eligió pagar con efectivo. El precio final es de U$S ' + precioFinalEfectivo);
                        alert('¡Felicitaciones! ¡Se realizó correctamente la compra de tu producto! ' + preentreno1);
                        break;
                    case '4':
                        break;
                    default:
                        alert('Opción no válida. Por favor seleccioná una opción válida.');
                }
            } while (metodoPago3 !== '4'); 
            break;

        case '4':
            let metodoPago4;
            do {
                metodoPago4 = prompt('Eligió ' + massgainer1 + ' y su precio es de U$S ' + precioMassgainer1 + '. Elegí un método de pago. \n1 - Tarjeta Débito/Crédito (10% OFF) \n2 - Mercado Pago (15% OFF) \n3 - Efectivo (20% OFF) \n4 - Volver');
                switch (metodoPago4) {
                    case '1':
                        let precioFinalTarjeta = calcularDescuento(precioMassgainer1, descuentoTarjeta);
                        alert('Eligió pagar con tarjeta de débito/crédito. El precio final es de U$S ' + precioFinalTarjeta);
                        alert('¡Felicitaciones! ¡Se realizó correctamente la compra de tu producto! ' + massgainer1);
                        break;
                    case '2':
                        let precioFinalMercadoPago = calcularDescuento(precioMassgainer1, descuentoMercadoPago);
                        alert('Eligió pagar con Mercado Pago. El precio final es de U$S ' + precioFinalMercadoPago);
                        alert('¡Felicitaciones! ¡Se realizó correctamente la compra de tu producto! ' + massgainer1);
                        break;
                    case '3':
                        let precioFinalEfectivo = calcularDescuento(precioMassgainer1, descuentoEfectivo);
                        alert('Eligió pagar con efectivo. El precio final es de U$S ' + precioFinalEfectivo);
                        alert('¡Felicitaciones! ¡Se realizó correctamente la compra de tu producto! ' + massgainer1);
                        break;
                    case '4':
                        break;
                    default:
                        alert('Opción no válida. Por favor seleccioná una opción válida.');
                }
            } while (metodoPago4 !== '4'); 
            break;

        case '5':
            break;
        default:
            alert('Opción no válida. ¡Por favor, seleccioná una opción válida!');
    }
} while (opcionesFitness !== '5'); 