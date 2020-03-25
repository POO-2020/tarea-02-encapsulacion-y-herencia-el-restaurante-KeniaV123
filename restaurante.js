import ElementoPedido from ".//elemento_pedido.js";
import Producto from ".//producto.js";
import Precio from ".//precio.js";
import Tiempo from ".//tiempo.js";
import Fecha from ".//fecha.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";

export default class Restaurante {
    /**
     * 
     * @param {string} nombre 
     * @param {string} telefono 
     * @param {string} direccion 
     */
    constructor({ nombre, telefono, direccion }) {
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
        this._productos = new Array();
        this._pedidos = new Array();
    }

    registrarProducto(producto) {
        this._productos.push(producto.getDescription());
    }

    listarProductos() {
        this._productos.forEach((producto, i) => {
            console.log(`${i} - ${producto}`)
        });
    }

    listarPedidos() {
        this._pedidos.forEach((pedido, i) => {
            console.log(`${i} - ${pedido.getResumen()}`)
        })
    }

    buscarIndice(pedido) {
        let resultado = this._pedidos.find(p => p.esIgualA(pedido));

        return resultado;
    }

    buscarPedido(pedido){
        var resultado = null;
        this._pedidos.forEach(ped => {
            if (ped._numeroPedido === pedido._numeroPedido){
                resultado = ped;
            }
        });
        return resultado;
    }
    registrarPedido(pedido) {
        if (this.buscarPedido(pedido) === undefined) {
            this._pedidos.push(pedido);
            return true;
        }
        return false;
    }

    eliminarPedido(pedido) {
        var indice = -1;
        this._pedidos.forEach((p, i) => {
            if (pedido._numeroPedido === p._numeroPedido) {
                indice = i;
            }
        });
        if (indice < 0) {
            return false;
        }
        this._pedidos.splice(indice, 1);
        return true;
    }

    modificarPedido(pedido, nuevoPedido) {
        let index = this.buscarPedido(pedido);

        if (index < 0) {
            return flase;
        }

        this._pedidos.splice(index, 1, nuevoPedido);
        return true;
    }
}