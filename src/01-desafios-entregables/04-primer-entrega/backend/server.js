

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ProductManager from '../productManager.js';
import CartManager from '../cartManager.js';

dotenv.config();

const app = express();
app.use( cors() );
app.use( express.json() ); // Used to parse JSON bodies

const PORT = process.env.PORT || 8080;

if ( !PORT ) {
    console.error( "Missing environment variables" );
    process.exit( 1 );
}

const productManager = new ProductManager();

// Routes for /products
app.get( "/api/products", async ( req, res ) => {
    try {
        const limit = req.query.limit;
        const products = await productManager.getProducts( limit );
        res.status( 200 ).json( products );
    } catch ( error ) {
        console.error( error );
        res.status( 500 ).json( { status: 'error', error: 'Something went wrong' } );
    }
} );

app.get( "/api/products/:pid", async ( req, res ) => {
    try {
        const product = await productManager.getProductById( req.params.pid );
        if ( !product ) {
            res.status( 404 ).send( { status: 'error', error: 'Product not found' } );
        } else {
            res.json( product );
        }
    } catch ( error ) {
        console.error( error );
        res.status( 500 ).json( { status: 'error', error: 'Something went wrong' } );
    }
} );

app.post( "/api/products", async ( req, res ) => {
    try {
        const newProduct = await productManager.addProduct( req.body );
        res.status( 201 ).json( newProduct );
    } catch ( error ) {
        console.error( error );
        res.status( 500 ).json( { status: 'error', error: 'Something went wrong' } );
    }
} );

app.put( "/api/products/:pid", async ( req, res ) => {
    try {
        const updatedProduct = await productManager.updateProduct( req.params.pid, req.body );

        if ( !updatedProduct ) {

            res.status( 404 ).send( { status: 'error', error: 'Product not found' } );

        } else {

            res.json( updatedProduct );
        }

    } catch ( error ) {

        console.error( error );
        res.status( 500 ).json( { status: 'error', error: 'Something went wrong' } );
    }
} );

app.delete( "/api/products/:pid", async ( req, res ) => {
    try {

        const deleted = await productManager.deleteProduct( req.params.pid );

        if ( !deleted ) {
            res.status( 404 ).send( { status: 'error', error: 'Product not found' } );

        } else {

            res.json( { status: 'success', message: 'Product deleted' } );
        }

    } catch ( error ) {

        console.error( error );

        res.status( 500 ).json( { status: 'error', error: 'Something went wrong' } );
    }
} );


// Routes for /cart
const cartManager = new CartManager();

app.post( "/api/cart", async ( req, res ) => {
    try {
        const newCart = await cartManager.createCart();
        res.status( 201 ).json( newCart );
    } catch ( error ) {
        console.error( error );
        res.status( 500 ).json( { status: 'error', error: 'Something went wrong' } );
    }
} );

app.get( "/api/cart/:cid", async ( req, res ) => {
    try {
        const cart = await cartManager.getCart( req.params.cid );
        res.json( cart );
    } catch ( error ) {
        console.error( error );
        res.status( 500 ).json( { status: 'error', error: 'Something went wrong' } );
    }
} );

app.post( "/api/cart/:cid/products/:pid", async ( req, res ) => {
    try {
        const updatedCart = await cartManager.addProduct( req.params.cid, req.params.pid );
        res.json( updatedCart );
    } catch ( error ) {
        console.error( error );
        res.status( 500 ).json( { status: 'error', error: 'Something went wrong' } );
    }
} );

app.listen( PORT, () => {
    console.log( `Server running on port => ${PORT} 🤓` );
} );


// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';

// import ProductManager from '../04-primer-entrega.js';

// dotenv.config();

// const app = express();
// app.use( cors() );

// const PORT = process.env.PORT || 5000;

// const productManager = new ProductManager();

// app.get( "/api/products", async ( req, res ) => {
//     try {
//         const limit = req.query.limit;
//         const products = await productManager.getProducts( limit );
//         res.status( 200 ).json( products );
//     } catch ( error ) {
//         console.error( error );
//         res.status( 500 ).json( { status: 'error', error: 'Something went wrong' } );
//     }
// } );

// app.get( "/api/product/:pid", async ( req, res ) => {
//     try {
//         const product = await productManager.getProductById( req.params.id );
//         if ( product === 'Producto No Encontrado' ) {
//             console.log( 'Producto No Encontrado' );
//             res.status( 404 ).send( { status: 'error', error: 'Producto No Encontrado' } );
//         } else {
//             res.json( product );
//         }
//     } catch ( error ) {
//         console.error( error );
//         res.status( 500 ).json( { status: 'error', error: 'Something went wrong' } );
//     }
// } );

// app.get( "/products/category/:category", async ( req, res ) => {
//     try {
//         const searchedProductsByCategory = await productManager.getProductsByCategory( req.params.category );
//         res.send( { searchedProductsByCategory } );
//     } catch ( error ) {
//         console.error( error );
//         res.status( 500 ).json( { status: 'error', error: 'Something went wrong' } );
//     }
// } );

// app.listen( PORT, () => {
//     console.log( `Server running on port => ${PORT} 🤓` );
// } );



// // //node --watch h:/02-backend/backend-43345/src/01-desafios-entregables/03-desafio/server.js

// // import express from 'express';
// // import cors from 'cors';
// // import dotenv from 'dotenv';

// // import ProductManager from '../04-primer-entrega.js';

// // dotenv.config();

// // const app = express();
// // app.use( cors() );

// // const PORT = process.env.PORT || 5000;

// // const productManager = new ProductManager();

// // app.get( "/api/products", async ( req, res ) => {

// //     try {
// //         const limit = req.query.limit;
// //         const products = await productManager.getProducts( limit );
// //         res.status( 200 ).json( products );

// //     } catch ( error ) {
// //         console.log( error );
// //         res.status( 400 ).send( { status: 'error', error: 'Something went wrong' } );
// //     }

// // } );

// // app.get( "/product/:id", async ( req, res ) => {

// //     try {
// //         const product = await productManager.getProductById( req.params.id );

// //         if ( product === 'Producto No Encontrado' ) {
// //             console.log( 'Producto No Encontrado' );
// //         } else {
// //             res.json( product );
// //         }

// //     } catch ( error ) {
// //         console.log( error );
// //     }

// // } )

// // app.get( "/products/category/:category", async ( req, res ) => {

// //     try {
// //         const searchedProductsByCategory = await productManager.getProductsByCategory( req.params.category );
// //         res.send( { searchedProductsByCategory } );

// //     } catch ( error ) {
// //         console.log( error );
// //     }

// // } )

// // app.listen( PORT, () => {
// //     console.log( `Server running on port => ${PORT} 🤓` );
// // } )