

// Posibles tests
// 
// 1. Pruebas unitarias para **ProductManager**
// - Test **getProducts()** sin un parámetro de límite y asegúrate de que devuelve todos los productos.
// - Test **getProducts()** con un parámetro de límite y asegúrate de que devuelve el número correcto de productos.
// - Test **addProduct()** con datos válidos y asegúrate de que añade un producto correctamente.
// - Test **addProduct()** con datos incompletos y asegúrate de que lanza un error.
// - Test **deleteProduct()** con un id válido y asegúrate de que borra el producto.
// - Test **deleteProduct()** con un id inválido y asegúrate de que lo maneja correctamente.
// - Test **getProductsByCategory()** con una categoría válida y asegúrate de que devuelve los productos correctos.
// - Test **getProductsByCategory()** con una categoría inválida y asegúrate de que devuelve una lista vacía.
// - Test **getProductById()** con un id válido y asegúrate de que devuelve el producto correcto.
// - Test **getProductById()** con un id inválido y asegúrate de que devuelve 'ProductoNo Encontrado'.
// 
// 2. Pruebas de integración para el **servidor**
// - Test GET **/products** sin parámetros de consulta y asegúrate de que devuelve todos los productos.
// - Test GET **/products** con el parámetro de consulta de límite y asegúrate de que devuelve el número correcto de productos.
// - Test GET **/product/:id** con un id válido y asegúrate de que devuelve el producto correcto.
// - Test GET **/product/:id** con un id inválido y asegúrate de que devuelve una respuesta de error.
// - Test GET **/products/category/:category** con una categoría válida y asegúrate de que devuelve los productos correctos.
// - Test GET **/products/category/:category** con una categoría inválida y asegúrate de que devuelve una lista vacía.

import fs from 'fs';

const PRODUCTS_FILE_PATH = './src/01-desafios-entregables/03-desafio/files/products.json';

export default class ProductManager {

    async getProducts ( limit ) {
        if ( fs.existsSync( PRODUCTS_FILE_PATH ) ) {

            try {
                const data = await fs.promises.readFile( PRODUCTS_FILE_PATH, 'utf-8' );
                const products = JSON.parse( data );

                if ( limit !== undefined ) {
                    return products.slice( 0, limit );
                };

                return products;

            } catch ( error ) {
                console.error( 'Error => reading the products file:', error );
                return [];
            }

        } else {
            console.warn( `${PRODUCTS_FILE_PATH} , doesn't exist.` );
            return [];
        }
    };

    async addProduct ( title, category, shortDescription, description, imageUrl, demoUrl, techStack ) {

        if ( !title || !category || !shortDescription || !description || !imageUrl || !demoUrl || !techStack ) {
            throw new Error( `Missing product mandatory info (title, category, shortDescription, description, imageUrl, demoUrl, techStack)` );
        }

        const products = await this.getProducts();

        const newProduct = {
            title,
            category,
            shortDescription,
            description,
            imageUrl,
            demoUrl,
            techStack,
            id: products.length > 0 ? products[ products.length - 1 ].id + 1 : 1,
        };

        products.push( newProduct );
        await fs.promises.writeFile( PRODUCTS_FILE_PATH, JSON.stringify( products, null, '\t' ) );
    };

    async deleteProduct ( id ) {

        const products = await this.getProducts();
        const filteredProducts = products.filter( product => product.id != id );

        await fs.promises.writeFile( PRODUCTS_FILE_PATH, JSON.stringify( filteredProducts, null, '\t' ) )

    };

    async getProductsByCategory ( category ) {

        const products = await this.getProducts();
        return products.filter( ( product ) => product.category === category );

    };

    async getProductById ( id ) {

        const products = await this.getProducts();
        const searchedProduct = products.find( product => product.id === id );

        return searchedProduct
            ? searchedProduct
            : 'Usuario No Encontrado';
    };

};
