interface Config {
    idioma: string;
    rutaBaseDatos: string;
    nivelRegistro: string;
  }
  
  export class Configuracion {
    // Inicialización por defecto para evitar que sea indefinida
    private static config: Config = {
      idioma: "español",
      rutaBaseDatos: "/path/to/database",
      nivelRegistro: "info"
    };
  
    // Método estático para obtener la configuración actual
    public static getInfo(): Config {
      return Configuracion.config;
    }
  
    // Método estático para actualizar la configuración
    public static updateConfig(nuevaConfig: Config): void {
      Configuracion.config = nuevaConfig;
    }
  }
  