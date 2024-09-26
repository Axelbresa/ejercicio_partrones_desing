interface valores_equipo{
    nombre:string
    tipo:string
    estado:string
    tiempoUso:number
}

interface Observador{
    notificar(equipo:valores_equipo, estado:string, tiempo_uso:number): void;
}

export class DepartamentoMantenimiento implements Observador{
    public notificar(equipo:Equipo, estado:string, tiempo_uso:number):void{

        if (estado==="mantenimiento preventivo" && tiempo_uso>100){
            console.log(`Notificacion: El equipo ${equipo.nombre} del tipo ${equipo.tipo} necesita mantenimiento preventivo y superado las 100 horas de uso del equipo, en esta caso has usado ${tiempo_uso}hs`)
        } else if(estado==="mantenimiento preventivo"){
            console.log(`El equipo ${equipo.nombre} de tipo ${equipo.tipo} necesita mantenimiento preventivo`)
        }else if(tiempo_uso>100){
            console.log(`El equipo ${equipo.nombre} de tipo ${equipo.tipo}, ha excedido el tiempo de uso de 100hs has usado ${tiempo_uso}hs`)
        }
    }
}

export class Equipo implements valores_equipo{
    private observadores:Observador[]=[]
    public nombre:string
    public tipo:string
    public estado:string
    public tiempoUso:number
    public umbral:number

    constructor(nombre:string, tipo:string, estado:string, tiempoUso:number, umbral=100){
        this.nombre=nombre,
        this.tipo=tipo,
        this.estado=estado,
        this.tiempoUso=tiempoUso
        this.umbral=umbral
    }

    add_observer(observador:Observador){
       this.observadores.push(observador)
    }

    cambiar_estado(nuevo_estado:string, nuevo_tiempo_uso:number):void{
        this.estado=nuevo_estado  
        this.tiempoUso=nuevo_tiempo_uso  

        if (nuevo_estado==="mantenimiento preventivo" || nuevo_tiempo_uso>this.umbral){
            this.notificar_all_observador()
        }  else if(nuevo_tiempo_uso<=100 && nuevo_estado!="mantenimiento preventivo"){
            console.log(`El equipo ${this.nombre} del tipo ${this.tipo} no necesita mantenimiento y no excedido el tiempo uso`)
        }
    }

    notificar_all_observador(){
        for(const observador of this.observadores){
            observador.notificar(this, this.estado, this.tiempoUso)
        }
    }

}
