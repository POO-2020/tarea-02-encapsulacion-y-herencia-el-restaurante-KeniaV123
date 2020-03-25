import Cliente from "./cliente.js"
import Fecha from "./fecha.js";


export default class ClienteFrecuente extends Cliente{

    constructor(
        {nombre, direccion, telefono, numeroCliente, fechaRegistro}
        )
    /**
     * 
     * @param {number} numeroCliente 
     * @param {Fecha} fechaRegistro 
     */
    {
        super(
            {nombre, direccion, telefono}
            )
        this._numeroCliente = numeroCliente
        this._fechaRegistro = fechaRegistro
    }

    getPerfil(){
        return (`${this._numeroCliente}, ${this._fechaRegistro.getFecha()}, ${this._nombre}, ${this._direccion.getFormatoCorto()}, ${this._telefono}`)
    }
}