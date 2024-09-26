// Ejercicio 1: Integrar Sistema de Facturación Antiguo
// Objetivo: Implementar el patrón Adaptador para integrar un sistema antiguo de facturación con
// el nuevo sistema de inventario.
// ● Crear una clase FacturacionVieja que tenga métodos como crearFactura y
// obtenerFactura.
// ● Implementar una clase AdaptadorFacturacion que permita utilizar FacturacionVieja con
// la nueva interfaz IFacturacion, la cual requiere métodos como generarFactura y
// consultarFactura.
// ● Asegurar que las facturas generadas a través del adaptador sean compatibles con el
// nuevo sistema de inventario.

interface Factura_interface{
    cliente:string,
    cant_producto:number,
    total:number
}

interface IFacturacion{
    generarFactura(Factura:Factura_interface):void
    consultarFactura():void
}

export class FacturacionVieja{
    facturas: { cliente: string; cant_product: number; total: number }[];

constructor(){
    this.facturas=[]
}

crearFactura(cliente:string, cant_product:number, total:number){
    const factura={
        cliente,
        cant_product,
        total
    }
    this.facturas.push(factura)
}

obtenerFactura(){
     console.log("Todas las facturas generadas son: ", this.facturas)
}

}

export class AdaptadorFacturacion implements IFacturacion{
    
    private facturaVieja:FacturacionVieja;

    constructor(facturaVieja:FacturacionVieja){
        this.facturaVieja=facturaVieja
    }    

    generarFactura(factura:Factura_interface): void {
        this.facturaVieja.crearFactura(factura.cliente, factura.cant_producto, factura.total)
        console.log(`Factura creada para: ${factura.cliente} con ${factura.cant_producto} productos. Total: ${factura.total}`)
    } 

    consultarFactura(): void {
        this.facturaVieja.obtenerFactura()
    }
}