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

        this.calle = calle;
        this.numeroExt = numeroExt;
        this.numeroInt = numeroInt;
        this.colonia = colonia;
        this.codigoPost = codigoPost;
        this.ciudad = ciudad;
        this.municipio = municipio;


    }
    getFormatoCorto(){
     return (`${this.calle} ${this.numeroExt}`)
    }
    getFormatoExtendido(){
     return (`Calle:${this.calle}, Número exterior:${this.numeroExt}, Número interior:${this.numeroInt}, Colonia:${this.colonia}, Codigo postal:${this.codigoPost}, Ciudad:${this.ciudad}, Municipio:${this.municipio}`)

    }
}