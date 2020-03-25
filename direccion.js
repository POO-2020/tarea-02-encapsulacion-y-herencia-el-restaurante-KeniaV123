export default class Direccion {

    /**
 * @param {string} calle
 * @param {number} numeroExt
 * @param {number} numeroInt
 * @param {string} colonia
 * @param {number} codigoPost
 * @param {string} ciudad
 * @param {string} municipio
 */
    constructor(calle, numeroExt, numeroInt, colonia, codigoPost, ciudad, municipio ) {

        this._calle = calle;
        this._numeroExt = numeroExt;
        this._numeroInt = numeroInt;
        this._colonia = colonia;
        this._codigoPost = codigoPost;
        this._ciudad = ciudad;
        this._municipio = municipio;


    }
    getFormatoCorto(){
     return (`${this._calle} ${this._numeroExt}`);
    }
    getFormatoExtendido(){
     return (`Calle:${this._calle}, Número exterior:${this._numeroExt}, Número interior:${this._numeroInt}, Colonia:${this._colonia}, Codigo postal:${this._codigoPost}, Ciudad:${this._ciudad}, Municipio:${this._municipio}`);

    }
}