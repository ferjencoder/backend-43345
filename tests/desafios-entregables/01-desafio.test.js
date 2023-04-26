
import ProductManager from '../../src/desafios-entregables/01-desafio';


describe( 'Pruebas en 01-desafio.js', () => {

    test( 'debe crear una instancia de la clase "ProductManager"', () => {
        console.log( 'Hello Test' );

        const productManager = new ProductManager();
        expect( productManager ).toBeInstanceOf( ProductManager );

    } );

    test( 'debe devolver un array vacío cuando se llama a "getProducts" en una instancia recién creada', () => {
        const productManager = new ProductManager();
        const products = productManager.getProducts();
        expect( products ).toEqual( [] );

    } );

    test( 'debe agregar un producto cuando se llama a "addProduct" y asignarle un ID único generado automáticamente que no se repita', () => {

        const productManager = new ProductManager();

        const productTest = {
            title: "producto prueba",
            description: "Este es un producto prueba",
            price: 200,
            thumbnail: "Sin imagen",
            code: "abc123",
            stock: 25
        };
        const productoAgregado = productManager.addProduct(
            productTest.title,
            productTest.description,
            productTest.price,
            productTest.thumbnail,
            productTest.code,
            productTest.stock
        );

        expect( productoAgregado.id ).toBeDefined();
        expect( productoAgregado.id ).not.toBeNaN();
        expect( productManager.getProducts() ).toContainEqual( productoAgregado );

    } );

    test( 'debe llamar al método "getProducts" de nuevo y asegurarse de que el producto recién agregado aparezca', () => {
        const productManager = new ProductManager();

        // Agregar un producto nuevo
        const newProduct = {
            title: "producto prueba cuatro",
            description: "Este es un producto prueba cuatro",
            price: 260,
            thumbnail: "Sin imagen cuatro",
            code: "abc123 cuatro",
            stock: 75,
        };
        productManager.addProduct(
            newProduct.title,
            newProduct.description,
            newProduct.price,
            newProduct.thumbnail,
            newProduct.code,
            newProduct.stock
        );

        // Asegurarse de que el método getProducts devuelva el producto recién agregado
        const products = productManager.getProducts();
        const expectedProduct = { ...newProduct, id: 1 }; // Incluir el ID esperado

        expect( products ).toEqual( [ expectedProduct ] );
    } );

    test( 'addProduct arroja un error si el código está repetido', () => {
        const productManager = new ProductManager();

        const productData = {
            title: 'producto prueba',
            description: 'Este es un producto prueba',
            price: 200,
            thumbnail: 'Sin imagen',
            code: 'abc123',
            stock: 25,
        };

        productManager.addProduct( productData );

        try {
            productManager.addProduct( productData );
        } catch ( error ) {
            expect( error ).toEqual( new Error( 'Msg from ferJen: Product already exists' ) );
        }
    } );

    test( "getProductById devuelve un error si el producto no se encuentra o devuelve el producto si se encuentra", () => {
        const productManager = new ProductManager();

        // agregar un producto nuevo
        const newProduct = {
            title: "producto prueba cinco",
            description: "Este es un producto prueba cinco",
            price: 300,
            thumbnail: "Sin imagen cinco",
            code: "abc123 cinco",
            stock: 50,
        };
        productManager.addProduct( newProduct );

        // obtener el producto agregado
        const addedProduct = productManager.getProducts()[ 0 ];

        // probar getProductById con un ID válido
        const validProductId = addedProduct.id;
        const returnedProduct = productManager.getProductById( validProductId );
        expect( returnedProduct ).toEqual( addedProduct );

        // probar getProductById con un ID inválido
        const invalidProductId = validProductId + 1;
        const returnedError = productManager.getProductById( invalidProductId );
        expect( returnedError ).toBeInstanceOf( Error );
        expect( returnedError.message ).toBe( "Msg from ferJen: Product not found" );
    } );

} );