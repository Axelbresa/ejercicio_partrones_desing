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
    rating: {
        rate: number;
        count: number;
    };
}

export class ProveedorExternoAPI {
    public productos: Product[] = []; // Array para almacenar productos

    constructor() {}

    // Cambiado a Promise<void>
    async fetchProductos(): Promise<void> {
        try {
            const response = await fetch('https://fakestoreapi.com/products/category/electronics');
            const data: Product[] = await response.json();
            // Filtrar solo las propiedades necesarias (id, title, price, rating)
            const filteredData = data.map((producto: any) => ({
                id: producto.id,
                title: producto.title,
                price: producto.price,
                rating: producto.rating
            }));
    
            // Agregar los productos filtrados al array
            this.productos.push(...filteredData);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    async updateStock(dato_actualizar: Product): Promise<void> {
        // Si el array de productos está vacío, hacer fetch de los productos
        if (this.productos.length === 0) {
            console.log('Los productos no están cargados. Cargando productos...');
            await this.fetchProductos(); // Esperar a que los productos se carguen
        }

        const producto = this.productos.find(product => product.id === dato_actualizar.id);
        
        if (producto) {
            producto.title = dato_actualizar.title;
            producto.price = dato_actualizar.price;
            producto.rating = dato_actualizar.rating;

            console.log(`Stock actualizado para el producto ${dato_actualizar.title}: ${dato_actualizar.price} : ${dato_actualizar.rating.count}`);
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

    async obtenerProductos() {
        // Esperar hasta que fetchProductos termine antes de continuar
        await this.proveedor_externo_api.fetchProductos();
        // console.log("Productos cargados: ", this.proveedor_externo_api.productos);
    }

    async actualizarInventario(update_producto: Product) {
        this.proveedor_externo_api.updateStock(update_producto);
    }

}

