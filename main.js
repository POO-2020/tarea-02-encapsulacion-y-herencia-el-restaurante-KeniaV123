import Pedido from "./pedido.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";
import ElementoPedido from "./elemento_pedido.js";
import Producto from "./producto.js";
import Precio from "./precio.js";
import ClienteFrecuente from "./cliente_frecuente.js";
import Restaurante from "./restaurante.js";

export default class Main {
    constructor() {

        let datosPedido1 = {
            numeroPedido: 1,
            fecha: new Fecha(22, 5, 2001),
            hora: new Tiempo(5, 13, 'PM'),
            cliente: new Cliente(
                'Kenia',
                new Direccion(
                    'Punta Diamante',
                    246,
                    'jiji',
                    28750,
                    'Colima',
                    'Villa de Alvarez'),
                31444444)
        }

        let datosPedido2 = {
            numeroPedido: 2,
            fecha: new Fecha(12, 7, 2019),
            hora: new Tiempo(2, 10, 'PM'),
            cliente: new Cliente(
                'Paola',
                new Direccion(
                    'Hidalgo',
                    333,
                    'Flores',
                    48373,
                    'Colima',
                    'Villa de Alvarez'),
                31455555)
        }

        let datosPedido3 = {
            numeroPedido: 1,
            fecha: new Fecha(22, 1, 2001),
            hora: new Tiempo(5, 23, 'PM'),
            cliente: new Cliente(
                'Maura',
                new Direccion(
                    'Corregidora',
                    111,
                    'Centro',
                    28750,
                    'Colima',
                    'Minatitlán'),
                31277777)
        }

        let datosPedido4 = {
            numeroPedido: 4,
            fecha: new Fecha(22, 1, 2001),
            hora: new Tiempo(2, 33, 'PM'),
            cliente: new Cliente(
                'José',
                new Direccion(
                    'Comarca',
                    666,
                    'Diamante',
                    28750,
                    'Colima',
                    'Villa de Alvarez'),
                3121135597)
        }

        this._pedido1 = new Pedido(datosPedido1);
        this._pedido2 = new Pedido(datosPedido2);
        this._pedido3 = new Pedido(datosPedido3);
        this._pedido4 = new Pedido(datosPedido4);


        let datosClienteFrecuente = {
            numeroCliente: 111,
            fechaRegistro: new Fecha(11, 4, 2020),
            nombre: 'Paola Villa',
            direccion: new Direccion(
                'Diamante',
                44,
                'La comarca',
                28750,
                'Colima',
                'Villa de Alvarez'
            ),
            telefono: 3121145555
        }

        this._clienteFrecuente1 = new ClienteFrecuente(datosClienteFrecuente);

        let datosRestaurante = {
            nombre: 'Pedacito de cielo',
            telefono: 3180112,
            direccion: 'Corregidora #2'
        }

        this._restaurante = new Restaurante(datosRestaurante);
    }

    testClienteFrecuente() {
        console.log(this._clienteFrecuente1.getPerfil());
    }

    agregarElementoPedido() {
        let elem1 = new ElementoPedido(new Producto('Pizza', new Precio(40.5)), 2);
        let elem2 = new ElementoPedido(new Producto('Pizza chica', new Precio(10.5)), 4);
        this._pedido1.agregarElemento(elem1);
        this._pedido1.agregarElemento(elem2);
        this._pedido1.listarElementos();
    }

    testPedido() {
        console.log(this._pedido1.getResumen());
    }

    testRestaurante() {
        console.log("Test Productos ");

        let producto1 = new Producto('Pepsi', 15);
        let producto2 = new Producto('coca', 20);
        let producto3 = new Producto('chetos', 13);

        this._restaurante.registrarProducto(producto1);
        this._restaurante.registrarProducto(producto2);
        this._restaurante.registrarProducto(producto3);

        this._restaurante.listarProductos();

        console.log("------------------ Test Pedidos ------------------");
        console.log(this._restaurante.registrarPedido(this._pedido1));
        console.log(this._restaurante.registrarPedido(this._pedido2));
        console.log(this._restaurante.registrarPedido(this._pedido3));

        this._restaurante.listarPedidos();

       
        console.log(this._restaurante.buscarPedido(this._pedido2));
        console.log(this._restaurante.buscarPedido(this._pedido4));

        console.log(this._restaurante.modificarPedido(this._pedido1, this._pedido3));
        this._restaurante.listarPedidos();

        console.log(this._restaurante.eliminarPedido(this._pedido1));
        console.log(this._restaurante.eliminarPedido(this._pedido3));

        this._restaurante.listarPedidos();
    }
}

let app = new Main();
app.agregarElementoPedido();
app.testPedido();
app.testRestaurante();