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

interface IProveedor {
    obtenerProductos(): void;
    actualizarInventario(data: Product): void;
}

interface Product {
    id: number;
    title: string;
    price: number;
    stock?: number; // Puedes agregar stock si es necesario
    rating: {
        rate: number;
        count: number;
    };
}

export class ProveedorExternoAPI {
    public productos: Product[] = []; // Array para almacenar productos

    constructor() {}

    // Cambiado a Promise<void>
    fetchProductos(): Promise<void> {
        return fetch('https://fakestoreapi.com/products/category/electronics')
            .then(response => response.json())
            .then((data: Product[]) => {
                // Iterar sobre los productos y agregar al array
                this.productos.push(...data); // Agregar productos al array
                console.log('Productos agregados:', this.productos);
            })
            .catch(error => console.error('Error fetching products:', error));
    }

    updateStock(dato_actualizar: Product) {
        console.log("Lista de productos en updateStock:", this.productos);

        const producto = this.productos.find(product => product.id === dato_actualizar.id);
        
        if (producto) {
            // Actualizar el stock o cualquier otro campo necesario
            producto.price = dato_actualizar.price; // Cambia esto si necesitas actualizar el stock
            console.log(`Stock actualizado para el producto ${producto.title}: ${producto.price}`);
        } else {
            console.log(`Producto con ID ${dato_actualizar.id} no encontrado.`);
        }
    }
}
        
    export class AdaptadorProveedor implements IProveedor {
    private proveedor_externo_api: ProveedorExternoAPI;
    
    constructor(proveedor_externo_api: ProveedorExternoAPI) {
        this.proveedor_externo_api = proveedor_externo_api;
    }

    obtenerProductos() {
        this.proveedor_externo_api.fetchProductos()
    }

    actualizarInventario(update_producto: Product) {
        this.proveedor_externo_api.updateStock(update_producto);
    }
}
