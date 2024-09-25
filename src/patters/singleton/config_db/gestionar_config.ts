import {config_gestion, Config} from "./config_gestion"
  
  export class Configuracion {

    private idioma:string
    private rutaBaseDatos:string
    private nivelRegistro:string

    // Inicialización por defecto para evitar que sea indefinida
    constructor(config_gestion:Config){
      this.idioma = config_gestion.idioma;
      this.rutaBaseDatos = config_gestion.rutaBaseDatos;
      this.nivelRegistro = config_gestion.nivelRegistro;
    }
   
    // Método estático para obtener la configuración actual
    public getInfo() {
      const info_global = {
        idioma: this.idioma,
        rutaBaseDatos: this.rutaBaseDatos,
        nivelRegistro: this.nivelRegistro,
      };

      console.log(info_global)
    }
  
    // Método estático para actualizar la configuración
    public updateConfig(nuevaConfig: Config): void {
      this.idioma = nuevaConfig.idioma;
      this.rutaBaseDatos = nuevaConfig.rutaBaseDatos;
      this.nivelRegistro = nuevaConfig.nivelRegistro;
      console.log("Se actualizado correctamente la configuracion global")
    }
    
  }
  