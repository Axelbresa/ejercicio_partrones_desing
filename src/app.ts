import { Configuracion} from "./patters/singleton/gestionar_config";
import { ConexionDB} from "./patters/singleton/conexion_db";
import { config_db } from "./patters/singleton/config_db";
import { config_gestion} from "./patters/singleton/config_gestion";

//Patron Singletón

//gestion de configuracion
console.log("Gestion de configuracion global---------------------------")
const config_global=new Configuracion(config_gestion)
  // Mostrar la configuración actual
  config_global.getInfo()
  
config_global.updateConfig({
  idioma: "ingles",
    rutaBaseDatos: "/path/to/db",
    nivelRegistro: "informacion"
})

 // Mostrar la configuración actual
 config_global.getInfo()

 //conexion db 
 console.log("Conexion a la base de datos---------------------------")
const conect=new ConexionDB(config_db)
conect.listenPuerto()
conect.conectarDb()
conect.desconectarDb()

// //Patron Factory Method

// //Patron Observer


// Patrón Adaptador:
// Configurar la configuración inicial


