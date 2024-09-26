// Ejercicio 2: Compatibilidad con APIs Externas
// Objetivo: Utilizar el patrón Adaptador para integrar una API externa de proveedores con el
// sistema de inventario existente.
// ● Crear una clase ProveedorExternoAPI que ofrezca métodos como fetchProductos y
// updateStock.
// ● Implementar una clase AdaptadorProveedor que permita utilizar ProveedorExternoAPI
// con la interfaz IProveedor, que requiere métodos como obtenerProductos y
// actualizarInventario.
// ● Asegurar que los datos obtenidos de la API externa se adapten correctamente al
// formato requerido por el sistema de inventario.