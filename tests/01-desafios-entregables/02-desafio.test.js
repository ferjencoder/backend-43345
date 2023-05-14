

import ProductManager from '../../src/00-desafios-entregables/02-desafio/02-desafio';


describe( 'Pruebas en 02-desafio.js', () => {

    test( 'ProductManager debe poder agregar un producto', async () => {

        const productManager = new ProductManager();

        const productTest = {
            title: 'Title of Test Product',
            description: 'Description of Test product',
            price: 10,
            thumbnail: 'test-image.jpg',
            code: 'abc123',
            stock: 105
        };

        const productoAgregado = await productManager.addProduct(
            productTest.title,
            productTest.description,
            productTest.price,
            productTest.thumbnail,
            productTest.code,
            productTest.stock
        );

        expect( productoAgregado.id ).toBeDefined();
        expect( productoAgregado.id ).not.toBeNaN();

        expect( productManager.getProducts() ).toContain( productoAgregado );

    } );
} );
