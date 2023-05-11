

// const fs = requiere( 'fs' );

import fs from 'fs';

const path = './Products.json';

export default class ProductManager {

    constructor() {
        this.products = [];
    }

    getProducts = async () => {
        if ( fs.existsSync( path ) ) {
            const data = await fs.promises.readFile( path, 'utf-8' );

            const productsJSON = JSON.parse( data );

            this.products = productsJSON;

            return productsJSON
        } else {
            return [];
        }
    }

    addProduct = async (
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    ) => {
        if ( !title || !description || !price || !thumbnail || !code || !stock ) {
            console.warn( `Missing product info (title, description, price, thumbnail, code, stock)` );
        }

        const productsJSON = await this.getProducts( path );

        const productIndex = productsJSON.findIndex(
            product => product.code === code
        );

        if ( productIndex >= 0 ) {
            console.error( "Msg from ferJen: Product already exists", productIndex );
            return false;
        };

        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if ( this.products.length === 0 ) {
            product.id = 1;
        } else {
            product.id = this.products[ this.products.length - 1 ].id + 1;
        }

        this.products.push( product );
        console.log( 'this.products', this.products );

        await fs.promises.writeFile( path, JSON.stringify( this.products, null, '\t' ) )

        return product;
    }

    getProductById = ( id ) => {
        const storedProduct = this.products.find( product => product.id === id );

        if ( !storedProduct ) {
            console.error( "Msg from ferJen: Product not found" );
            return new Error( "Msg from ferJen: Product not found" );
        }

        return storedProduct;
    }

    updateProduct = async (
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    ) => {


        // console.log( this.getProducts() );

        const storedProductIndex = this.products.findIndex(
            ( product ) => product.id === id
        );

        console.log( storedProductIndex );


        if ( storedProductIndex === -1 ) {
            console.error( `Msg from ferJen: Product not found` );
            return new Error( `Msg from ferJen: Product not found` );
        }

        const updatedProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products[ storedProductIndex ] = updatedProduct;
        console.log( this.products );

        await fs.promises.writeFile(
            path,
            JSON.stringify( this.products, null, '\t' )
        );

        console.log( 'updatedProduct', updatedProduct );

        return updatedProduct;
    };
};

const productManager = new ProductManager();

const newProduct = await productManager.addProduct(
    'Product A',
    'Description of Product A',
    100.0,
    'https://example.com/product-a-thumbnail.jpg',
    'PA001',
    10
);

const updatedProduct = await productManager.updateProduct(
    1,
    'Product A',
    'New description of Product A',
    1200.0,
    'https://example.com/product-a-thumbnail-v2.jpg',
    'PA001',
    155
);

productManager.getProducts().then( ( products ) => {
    console.log( 'Products in store =>', products );
} );


async function logProducts () {
    const products = await productManager.getProducts();
    console.log( 'Products in store =>', products );
}

logProducts();


console.log( 'Product updated:', updatedProduct );


console.log( 'Product found =>', productManager.getProductById( 1 ) );
console.log( 'Products in store =>', productManager.getProducts() );
//console.log( productManager.getProductById( 85 ) );
// productManager.addProduct(
//     'producto prueba',
//     'Este es un producto prueba',
//     200,
//     'Sin imagen',
//     'abc123',
//     25
// );
// productManager.addProduct(
//     'producto prueba uno',
//     'Este es un producto prueba uno',
//     205,
//     'Sin imagen uno',
//     'abc123 uno',
//     35
// );
// productManager.addProduct(
//     'producto prueba dos',
//     'Este es un producto prueba dos',
//     210,
//     'Sin imagen dos',
//     'abc123 dos',
//     45
// );
