import { Configuracion} from "./patters/patron_singlento";

//Patron Singletón
Configuracion.updateConfig({
    idioma: "español",
    rutaBaseDatos: "/path/to/db",
    nivelRegistro: "info"
  });
  
  // Mostrar la configuración actual
  const configActual = Configuracion.getInfo();
  console.log(configActual);
  

// //Patron Factory Method

// //Patron Observer


// Patrón Adaptador:
// Configurar la configuración inicial


