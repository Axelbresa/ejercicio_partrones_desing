interface Equipo {
  getInfo(): { nombre: string; tipo: string, ram: string, procesador:string }; 
}

// Clase específica para Notebook
class Notebook implements Equipo {
  constructor(private nombre: string, private ram: string, private procesador: string) {}

  getInfo() {
    return { nombre: this.nombre, tipo: 'Notebook', ram: this.ram, procesador: this.procesador };
  }
}

// Clase específica para Desktop
class Desktop implements Equipo {
  constructor(private nombre: string, private ram: string, private procesador: string) {}

  getInfo() {
    return { nombre: this.nombre, tipo: 'Desktop', ram: this.ram, procesador: this.procesador };
  }
}

// Clase específica para Servidor
class Servidor implements Equipo {
  constructor(private nombre: string, private ram: string, private procesador: string) {}

  getInfo() {
    return { nombre: this.nombre, tipo: 'Servidor', ram: this.ram, procesador: this.procesador };
  }
}

export class EquipoFactory {
  private equipos: Equipo[] = []; // Array para almacenar equipos

  public crearEquipo(tipo: string, nombre: string, ram:string, procesador:string): Equipo {
    let equipo: Equipo;

    if (tipo === 'Notebook') {
      equipo = new Notebook(nombre, ram,  procesador);
    } else if(tipo==="Desktop"){
      equipo = new Desktop(nombre, ram, procesador);
    }else if (tipo==="Servidor"){
      equipo = new Servidor(nombre, ram, procesador);   
    }
    else {
      throw new Error('Tipo de producto no reconocido');
    }

    this.equipos.push(equipo); // Añadir el equipo al array
    return equipo; // Devolver el equipo creado
  }

  public detalles(): void {
    const infoEquipos = this.equipos.map(equipo => equipo.getInfo());
    console.log(infoEquipos);
  }
}
