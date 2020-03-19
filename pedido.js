import Tiempo from "./tiempo.js";
import Fecha from "./fechaRest.js";
import ElementoPedido from "./elementoPedido.js";
import cliente from "./cliente.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js";

export default class Pedido {
    /**
     *
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {Cliente} cliente 
     */
    constructor(fecha, hora, cliente) {
      this.fecha = fecha;
      this.hora = hora;
      this.cliente = cliente;
      this.elementosPedidos = new Array();
    }
  
    getResumen() {
      return `${this.fecha.getFecha()} ${this.hora.getFormato12()} - ${this.getNumeroElementos()} elementos con ${this.getProductos()} productos - total: ${this.getCostoTotal()}  `
    }
  
    getNumeroElementos() {
      return this.elementosPedidos.length
    }
  
    getProductos() {
      let x = 0;
      this.elementosPedidos.forEach(elemento => {
        x = elemento.cantidad + x
      })