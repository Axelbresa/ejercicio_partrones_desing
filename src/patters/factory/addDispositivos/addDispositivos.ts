interface dispositivo_teclado{
    conexion:string,
    tipo_teclado:string,
    cant_teclas:number,
}

interface dispositivo_raton{
    dpi:number,
    tipo_raton:string,
    cant_botones:number,
}

interface dispositivo_scanner{
    tipo_scanner:string,
    resolucion:number,
}

class Teclado implements dispositivo_teclado{
    public conexion:string;
    public tipo_teclado:string;
    public cant_teclas:number;

    constructor(tipo_teclado:string, conexion:string, cant_teclas:number) {
        this.tipo_teclado=tipo_teclado;
        this.conexion=conexion;
        this.cant_teclas=cant_teclas;
    }
}


class Ratón implements dispositivo_raton{
    public dpi:number;
    public tipo_raton: string;
    public cant_botones: number;

    constructor(dpi:number, tipo_raton: string, cant_botones: number) {
        this.dpi=dpi;
        this.tipo_raton=tipo_raton;
        this.cant_botones=cant_botones;
    }
}

class Scanner implements dispositivo_scanner{
    public tipo_scanner: string;
    public resolucion: number;

    constructor(tipo_scanner:string, resolucion:number) {
         this.tipo_scanner=tipo_scanner;
         this.resolucion=resolucion
    }
}

export class DispositivoEntradaFactory{

    crearDispositivo(tipo: string, propiedades: any) {
        if (tipo === "teclado") {
            const { tipo_teclado, conexion, cant_teclas } = propiedades;
            return new Teclado(tipo_teclado, conexion, cant_teclas);
        } else if (tipo === "raton") {
            const { dpi, tipo_raton, cant_botones } = propiedades;
            return new Ratón(dpi, tipo_raton, cant_botones);
        } else if (tipo === "scanner") {
            const { tipo_scanner, resolucion } = propiedades;
            return new Scanner(tipo_scanner, resolucion);
        } else {
            throw new Error('Tipo de dispositivo no reconocido');
        }
    }

}