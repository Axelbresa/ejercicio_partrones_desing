import { Configuracion} from "./patters/singleton/config_db/gestionar_config";
import { ConexionDB} from "./patters/singleton/conexion_db";
import { config_db } from "./patters/singleton/config_db";
import { config_gestion} from "./patters/singleton/config_db/config_gestion";
import {DispositivoEntradaFactory} from "./patters/factory/addDispositivos/addDispositivos"
import {PerifericoSalidaFactory} from "./patters/factory/fabricar_perifericos/fabricar_salida"
import {Equipo, DepartamentoMantenimiento} from "./patters/observer/notifi_mante/notificacion"
import {InterfazUsuario, Inventario} from "./patters/observer/updateInventario/inventario_update"
import { FacturacionVieja, AdaptadorFacturacion } from "./patters/adaptador/Integrar_sys_Facturación/sys_facturacion";
import {AdaptadorProveedor, ProveedorExternoAPI} from "./patters/adaptador/api_externas/api_externas"

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
// entrada de factory
console.log("entrada de factory---------------------------------")

const dispositivo_entrada=new DispositivoEntradaFactory()

const teclado=dispositivo_entrada.crearDispositivo("teclado", {
  conexion:"cable", 
  tipo_teclado:"Mecánico", 
  cant_teclas:24
})

const raton=dispositivo_entrada.crearDispositivo("raton", {
  dpi:500,
  tipo_raton:"optico",
  cant_botones:5
})

const scanner=dispositivo_entrada.crearDispositivo("scanner", {
  tipo_scanner:"Scanner 3D",
  resolucion:9100
})

console.log(teclado)
console.log(raton)
console.log(scanner)

// Salida de factory
console.log("Salida de factory---------------------------------")
const dispositivo_salida=new PerifericoSalidaFactory()

const Monitor= dispositivo_salida.crearPeriferico("Monitor", {
    resolucion: "1920x1080",
    tamaño_pantalla:"24 pulgadas"
})

const Impresora = dispositivo_salida.crearPeriferico("Impresora", {
    tipo_impresora:"Inyección de tinta",
    velocidad_impresion: "20 páginas por minuto"
})

const Proyector= dispositivo_salida.crearPeriferico("Proyector", {
    resolucion:"1080p, 4K",
    brillo:"medido en lúmenes",
})

console.log(Monitor)
console.log(Impresora)
console.log(Proyector)

// //Patron Observer
//notificacion de mantenimiento
console.log("Notificacion_Mantenimiento---------------------------------")

const departamento_mantemiento=new DepartamentoMantenimiento()

const mantenimiento_equipo1=new Equipo("lenovo", "electronico", "Impecable", 75)

mantenimiento_equipo1.add_observer(departamento_mantemiento)

mantenimiento_equipo1.cambiar_estado("En buenas condiciones", 51)
mantenimiento_equipo1.cambiar_estado("mantenimiento preventivo", 100)
mantenimiento_equipo1.cambiar_estado("En buenas condiciones", 101)
mantenimiento_equipo1.cambiar_estado("mantenimiento preventivo", 100)
mantenimiento_equipo1.cambiar_estado("mantenimiento preventivo", 131)

//update inventario
console.log("Update de inventario---------------------------------")
const observador_usuario= new InterfazUsuario()
const inventario=new Inventario()
inventario.addObservador(observador_usuario);

inventario.addEquipo({id:1, nombre: "lenovox", tipo: "portátil" });
inventario.addEquipo({ id:2, nombre: "lenovo", tipo: "escritorio" });
inventario.updateEquipo(1, "LenovoActualizado", "gaming");
inventario.deleteEquipo(2);

// Patrón Adaptador:
//sistema de facturacion
  console.log("Sistema de facturacion---------------------------------")
  const factura_vieja=new FacturacionVieja()
  const factura_nueva=new AdaptadorFacturacion(factura_vieja)

  factura_nueva.generarFactura({cliente:"Axel", cant_producto:132, total:52513})
  factura_nueva.generarFactura({cliente:"Ramon", cant_producto:1332, total:21213})
  factura_nueva.consultarFactura()

  console.log("Api externas---------------------------------")

//Api externas
const proveedorAPI = new ProveedorExternoAPI();

proveedorAPI.fetchProductos().then(() => {
    // Aquí puedes llamar a updateStock después de que los productos se hayan cargado
    proveedorAPI.updateStock({ 
        id: 10, // Cambia al ID correcto que deseas actualizar
        title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
        price: 115, // Precio actualizado
        rating: { rate: 2.9, count: 470 }
    });
});