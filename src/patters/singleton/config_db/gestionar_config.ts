import {Config, config_gestion} from "./config_gestion"
  
  export class Configuracion{
      //Se crea una instancia privada de la clase
      private static instancia: Configuracion; 
      private idioma: string;
      private rutaBaseDatos: string;
      private nivelRegistro: string;

    // Inicialización por defecto para evitar que sea indefinida
    private constructor(){
      this.idioma = config_gestion.idioma;
      this.rutaBaseDatos = config_gestion.rutaBaseDatos;
      this.nivelRegistro = config_gestion.nivelRegistro;
    }
   
    // Método estático para obtener la configuración actual
    public static getInfo() {
        if (!Configuracion.instancia){
            Configuracion.instancia=new Configuracion()
        }
        return Configuracion.instancia
    }

    public get_config_global(){
      const config={
        idioma:this.idioma,
        rutaBaseDatos:this.rutaBaseDatos,
        nivelRegistro:this.nivelRegistro
      }
      console.log(config)
    }
  
    // Método estático para actualizar la configuración
    public updateConfig(nuevaConfig: Config): void {
      const config={
        idioma:nuevaConfig.idioma,
        rutaBaseDatos:nuevaConfig.rutaBaseDatos,
        nivelRegistro:nuevaConfig.nivelRegistro
      }
      console.log("Se actualizado correctamente la configuracion global", config

      )
    }
    
  }
  