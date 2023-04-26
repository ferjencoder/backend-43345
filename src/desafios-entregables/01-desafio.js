

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
            console.error( "Msg from ferJen: Product already exists" );
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
};

const productManager = new ProductManager();
productManager.addProduct(
    'producto prueba',
    'Este es un producto prueba',
    200,
    'Sin imagen',
    'abc123',
    25
);
productManager.addProduct(
    'producto prueba',
    'Este es un producto prueba',
    200,
    'Sin imagen',
    'abc123',
    25
);
productManager.addProduct(
    'producto prueba uno',
    'Este es un producto prueba uno',
    205,
    'Sin imagen uno',
    'abc123 uno',
    35
);
productManager.addProduct(
    'producto prueba dos',
    'Este es un producto prueba dos',
    210,
    'Sin imagen dos',
    'abc123 dos',
    45
);

console.log( 'Product found =>', productManager.getProductById( 1 ) );
console.log( productManager.getProductById( 85 ) );
console.log( 'Products in store =>', productManager.getProducts() );