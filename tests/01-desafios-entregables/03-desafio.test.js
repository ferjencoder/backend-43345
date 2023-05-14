

import fs from 'fs';

const PRODUCTS_FILE_PATH = './src/01-desafios-entregables/03-desafio/files/products.json';

export default class ProductManager {

    async getProducts ( num ) {
        if ( fs.existsSync( PRODUCTS_FILE_PATH ) ) {

            try {
                const data = await fs.promises.readFile( PRODUCTS_FILE_PATH, 'utf-8' );
                const products = JSON.parse( data );

                if ( num !== undefined ) {
                    return products.slice( 0, num );
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
