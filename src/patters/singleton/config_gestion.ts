export interface Config {
    idioma: string;
    rutaBaseDatos: string;
    nivelRegistro: string;
  }

export const config_gestion: Config = {
      idioma: "español",
      rutaBaseDatos: "/path/to/database",
      nivelRegistro: "info"
};