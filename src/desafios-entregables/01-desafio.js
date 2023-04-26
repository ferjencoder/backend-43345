

export default class ProductManager {

    constructor() {
        this.products = [];
    }

    getProducts () {
        return this.products;
    }

    addProduct (
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    ) {
        if ( !title || !description || !price || !code || !stock ) {
            console.warn( `Missing product info (title, description, price, thumbnail, code, stock)` );
        }
        const productIndex = this.products.findIndex(
            product => product.code === code
        );

        if ( productIndex >= 0 ) {
            throw new Error( "Msg from ferJen: Product already exists" )
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

        return product;
    }

    getProductById = ( id ) => {
        const storedProduct = this.products.find( product => product.id === id );

        if ( !storedProduct ) {
            return new Error( "Msg from ferJen: Product not found" );
        }

        return storedProduct;
    }
};


// const manager = new ProductManager();
// manager.addProduct(
//     'producto prueba',
//     'Este es un producto prueba',
//     200,
//     'Sin imagen',
//     'abc123',
//     25
// );
// manager.addProduct(
//     'producto prueba',
//     'Este es un producto prueba',
//     200,
//     'Sin imagen',
//     'abc123',
//     25
// );
// manager.addProduct(
//     'producto prueba uno',
//     'Este es un producto prueba uno',
//     205,
//     'Sin imagen uno',
//     'abc123 uno',
//     35
// );
// manager.addProduct(
//     'producto prueba dos',
//     'Este es un producto prueba dos',
//     210,
//     'Sin imagen dos',
//     'abc123 dos',
//     45
// );

// console.log( 'Product found =>', manager.getProductById( 1 ) );
// console.log( manager.getProductById( 85 ) );
// console.log( 'Products in store =>', manager.getProducts() );