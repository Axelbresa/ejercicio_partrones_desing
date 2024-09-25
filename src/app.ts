import { Configuracion} from "./patters/singleton/gestionar_config";
import { ConexionDB} from "./patters/singleton/conexion_db";
import { config } from "./patters/singleton/config_db";

//Patron Singletón

//gestion de configuracion
console.log("Gestion de configuracion---------------------------")
Configuracion.updateConfig({
    idioma: "español",
    rutaBaseDatos: "/path/to/db",
    nivelRegistro: "info"
  });
  
  // Mostrar la configuración actual
  const configActual = Configuracion.getInfo();
  console.log(configActual);
  
 //conexion db 
 console.log("Conexion a la base de datos---------------------------")
const conect=new ConexionDB(config)
conect.listenPuerto()
conect.conectarDb()
conect.desconectarDb()

// //Patron Factory Method

// //Patron Observer


// Patrón Adaptador:
// Configurar la configuración inicial


