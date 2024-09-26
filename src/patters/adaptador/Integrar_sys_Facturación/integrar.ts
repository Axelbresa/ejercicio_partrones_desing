// Interfaz que el sistema nuevo espera

interface NewSystemInterface {
    request(): string;
  }
  
  // Clase del sistema antiguo que tiene una interfaz diferente
export class OldSystem {
    specificRequest(): string {
      return 'Respuesta del sistema antiguo';
    }
  }
  
  // El adaptador que hace que OldSystem sea compatible con NewSystemInterface
export class Adapter implements NewSystemInterface {
    private oldSystem: OldSystem;
  
    constructor(oldSystem: OldSystem) {
      this.oldSystem = oldSystem;
    }
  
    // Método que adapta la llamada del nuevo sistema al viejo
    request(): string {
      return this.oldSystem.specificRequest();
    }
  }
  
