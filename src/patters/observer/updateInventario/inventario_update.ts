// Ejercicio 2: Actualización de Inventario en Tiempo Real
// Objetivo: Implementar el patrón Observer para actualizar en tiempo real la interfaz de usuario
// cuando se realicen cambios en el inventario.
// ● Crear una clase InterfazUsuario que actúe como observador y actualice la
// visualización del inventario cuando se agreguen, eliminen o modifiquen equipos.
// ● Modificar la clase Inventario para que permita agregar observadores y notifique a los
// observadores correspondientes cuando ocurra un cambio en la lista de equipos.
// ● Asegurar que múltiples instancias de InterfazUsuario puedan recibir y manejar las
// notificaciones adecuadamente.

interface Equipo{
    id:number,
    nombre:string,
    tipo:string,
}

interface Observador{
    notificacion(equipo:Equipo, accion:string, listaEquipos:Equipo[]):any
}
 
export class InterfazUsuario implements Observador{
    public notificacion(equipo:Equipo, accion:string, listaEquipos:Equipo[]):void{
        if (accion==="add"){
            console.log(`Se agregado correctamente el equipo: ${equipo.nombre} con su tipo ${equipo.tipo},
            nuestro inventario actualmente se veria asi: `)
        } else if (accion==="update"){
            console.log(`Se actualizado el equipo: ${equipo.nombre},
            nuestro inventario actualmente se veria asi: `)
        }else if(accion==="delete"){
              console.log(`Se eliminado el equipo: ${equipo.nombre},
                nuestro inventario actualmente se veria asi: `
        )
        }
    }
}

export class Inventario {
    private listaEquipos: Equipo[] = [];
    private observadores: Observador[] = []
  
    public addObservador(observador:Observador){
        this.observadores.push(observador)
    }    

      // Agregar un nuevo equipo al inventario
      public addEquipo(equipo: Equipo): void {
        this.listaEquipos.push(equipo);
        this.notificarAllObservadores(equipo, "add");
    }

    updateEquipo(id:number, nombre: string, tipo: string): void {
        const equipo = this.listaEquipos.find(e => e.id === id);
        if (equipo) {
            equipo.nombre=nombre
            equipo.tipo = tipo;  // Actualizamos el tipo del equipo
            this.notificarAllObservadores(equipo, 'update');
        } else {
            console.log("Equipo no encontrado para actualizar.");
        }
    }
    
    deleteEquipo(id: number): void {
        const index = this.listaEquipos.findIndex(e => e.id === id);
        if (index !== -1) {
            const equipoEliminado = this.listaEquipos.splice(index, 1)[0];
            this.notificarAllObservadores(equipoEliminado, 'delete');
        } else {
            console.log("Equipo no encontrado para eliminar.");
        }
    }
      
    private notificarAllObservadores(equipo:Equipo, accion:string): void {
        for (const observador of this.observadores){
            observador.notificacion(equipo, accion, this.listaEquipos)
            console.log(this.listaEquipos)
        }
    }

}