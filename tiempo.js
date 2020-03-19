export default class Tiempo{
    /**
     * 
     * @param {number} hora 
     * @param {number} minutos 
     * @param {number} periodo 
     */
    constructor(hora, minutos, periodo){
        this.hora = hora;
        this.minutos = minutos;
        this.periodo = periodo;
        this.horas = [
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
            return `${this.hora}:${this.minutos} ${this.periodo}`;
    }
    getFormato24(){
        if(this.periodo == "AM"){ 
            return `${this.horas[this.hora]}:${this.minutos}`;
        }
        else{
            return `${this.horas[this.hora + 12 ]}:${this.minutos}`;        
        }
    }
}
