export default class Fecha{
    /**
     * 
     * @param {number} dia 
     * @param {number} mes 
     * @param {number} año 
     */    
    constructor(dia, mes, año){ 
        this.fecha = new Date(año, mes-1, dia);
        this.diaSemana = [
            "Domingo", 
            "Lunes", 
            "Martes", 
            "Miercoles", 
            "Jueves", 
            "Viernes", 
            "Sabado"];
        this.mesAño = [
            "Enero", 
            "Febrero", 
            "Marzo", 
            "Abril", 
            "Mayo", 
            "Junio", 
            "Julio", 
            "Agosto", 
            "Septiembre", 
            "Octubre", 
            "Noviembre", 
            "Diciembre"];
    }
    getAños(){
        let x = Date.now() - this.fecha;
        let z = 1000*60*60*24*365;
        let fechaDiferencia = Math.trunc(x/z);
        return `la diferencia de la fecha es de ${fechaDiferencia} años`;
    }
    getMeses(){
        let x = Date.now() - this.fecha;
        let z = 1000*60*60*24*7*4;
        let fechaDiferencia = Math.trunc(x/z);
        return `la diferencia de la fecha es de ${fechaDiferencia} meses`;
    }
    getSemanas(){
        let x = Date.now() - this.fecha;
        let z = 1000*60*60*24*7;
        let fechaDiferencia = Math.trunc(x/z);
        return `la diferencia de la fecha es de ${fechaDiferencia} semanas`;
    }
    getDias(){
        let x = Date.now() - this.fecha;
        let z = 1000*60*60*24;
        let fechaDiferencia = Math.trunc(x/z);
        return `la diferencia de la fecha es de ${fechaDiferencia} dias`; 
    }
    getFecha(){
        return `${this.fecha.getDate()}/${this.mesAño[this.fecha.getMonth()]}/${this.fecha.getFullYear()}`;
    }
    getDiaFecha(){
        return `${this.diaSemana[this.fecha.getDay()]}`;        
    }
}