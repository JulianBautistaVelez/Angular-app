export class Dinero{
    banco: Number;
    caja: Number;
    fecha: Date;

    constructor(banco: Number, caja: Number, fecha: Date ){
        this.banco = banco;
        this.caja = caja;
        this.fecha = fecha;
    }
}