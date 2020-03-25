export default class Tiempo{
    /**
     * 
     * @param {number} hora 
     * @param {number} minutos 
     * @param {number} periodo 
     */
    constructor({hora, minutos, periodo}){
        this._hora = hora;
        this._minutos = minutos;
        this._periodo = periodo;
        this._horas = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            "00"
        ];
    }
    getFormato12(){
            return `${this._hora}:${this._minutos} ${this._periodo}`;
    }
    getFormato24(){
        if(this._periodo == "AM"){ 
            return `${this._horas[this._hora]}:${this._minutos}`;
        }
        else{
            return `${this._horas[this._hora + 12 ]}:${this._minutos}`;        
        }
    }
}
