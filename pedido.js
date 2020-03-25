import Precio from "./precio.js";
export default class Pedido {
    /**
     * 
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {cliente} cliente 
     * @param {elementosPedidos} elementosPedidos
     */
    constructor({fecha,hora,cliente,numeroPedido}){
        this._fecha=fecha;
        this._hora=hora;
        this._cliente=cliente;
        this._numeroPedido =numeroPedido;
        this._elementosPedidos=[];
        
    }
    
    getResumen(){
        return `${this._fecha.getFecha()} ${this._hora.getFormato12()} Pedido No. ${this._numeroPedido} Un total de ${this.getNumeroElementos()} Elementos con ${this.getNumeroProductos()} productos total: ${this.getCostoTotal()}`;
    }
    getNumeroElementos(){
        return (this._elementosPedidos.length);
    }
    getNumeroProductos(){
        var nProductos = 0;
        this._elementosPedidos.forEach(elemento => {
            nProductos+=elemento._cantidad;
        });
        return nProductos;
    }
    getCostoTotal(){
        var total = 0;
        this._elementosPedidos.forEach(elemento => {
            total += elemento._cantidad * elemento._producto._precio._valor;
        });
        return new Precio(total).getPrecio();

    }
    agregarElemento(elemento){
        this._elementosPedidos.push(elemento)
    }
    listarElementos(){
        this._elementosPedidos.forEach(elemento=>{
            console.log(elemento.getDescripcion())
        });
    }
}