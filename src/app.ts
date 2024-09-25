import { Configuracion} from "./patters/singleton/config_db/gestionar_config";
import { ConexionDB} from "./patters/singleton/conexion_db";
import { config_db } from "./patters/singleton/config_db";
import { config_gestion} from "./patters/singleton/config_db/config_gestion";
import {DispositivoEntradaFactory} from "./patters/factory/addDispositivos/addDispositivos"

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
const dispositivo=new DispositivoEntradaFactory()

const teclado=dispositivo.crearDispositivo("teclado", {
  conexion:"cable", 
  tipo_teclado:"Mecánico", 
  cant_teclas:24
})

const raton=dispositivo.crearDispositivo("raton", {
  dpi:500,
  tipo_raton:"optico",
  cant_botones:5
})

const scanner=dispositivo.crearDispositivo("scanner", {
  tipo_scanner:"Scanner 3D",
  resolucion:9100
})

console.log(teclado)
console.log(raton)
console.log(scanner)


// //Patron Observer

// Patrón Adaptador:



