import Direccion from ".//direccion.js";

export default class Cliente {


    /**
 * @param {string} nombre
 * @param {Direccion} direccion
 * @param {number} telefono 
 */

    constructor(nombre, direccion, telefono ){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono; 

    }
    getPerfil(){
        return (`Nombre del cliente:${this._nombre}, dirección:${this._direccion.getFormatoCorto()}, telefono:${this._telefono}`)    
    };
}