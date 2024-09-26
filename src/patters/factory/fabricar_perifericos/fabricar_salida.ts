interface dispositivoMonitor{
    resolucion:string,
    tamaño_pantalla:string
}

interface dispositivoImpresora{
    tipo_impresora:string,
    velocidad_impresion:string       
}

interface dispositivoProyector{
    resolucion:string,
    brillo:string
}


class Monitor implements dispositivoMonitor{

    public resolucion: string;
    public tamaño_pantalla: string;

    constructor(resolucion:string, tamaño_pantalla:string){
        this.resolucion=resolucion,
        this.tamaño_pantalla=tamaño_pantalla
    }
}

class Impresora implements dispositivoImpresora{
    
    public tipo_impresora: string;
    public velocidad_impresion: string;

    constructor(tipo_impresora:string, velocidad_impresion:string){
        this.tipo_impresora=tipo_impresora
        this.velocidad_impresion=velocidad_impresion
    }

}

class Proyecto implements dispositivoProyector{
    public resolucion: string;
    public brillo: string;

    constructor(resolucion:string, brillo:string){
        this.resolucion=resolucion,
        this.brillo=brillo
    }

}

export class PerifericoSalidaFactory{
    crearPeriferico(tipo:string, propiedades:any){
        if (tipo==="Monitor"){
            const {resolucion, tamaño_pantalla}= propiedades;
            return new Monitor(resolucion, tamaño_pantalla)
        } else if (tipo==="Impresora"){
            const {tipo_impresora, velocidad_impresion} = propiedades;
            return new Impresora(tipo_impresora, velocidad_impresion)
        } else if(tipo==="Proyector"){
            const {resolucion, brillo}=propiedades
            return new Proyecto(resolucion, brillo)
        } else {
            throw new Error("Tipo de periférico no soportado.");
        }
    }
}

